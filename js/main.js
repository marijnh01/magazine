window.addEventListener('load', init);

//Globals
let apiUrl = 'http://localhost/magazine/webservice/index.php';
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let genshinData = {};
let gallery;
let detailModal;
let detailModalContent;
let detailModalCloseButton;

/**
 * Initialize after the DOM is ready
 */
function init()
{
    //Retrieve gallery and add a click event for every Genshin character
    gallery = document.getElementById('genshin-gallery');
    gallery.addEventListener('click', genshinClickhandler);
    gallery.addEventListener('click', favClickhandler);

    //Retrieve modal elements, and add click event for closing modal
    detailModal = document.getElementById('genshin-detail');
    detailModalContent = detailModal.querySelector('.modal-content');
    detailModalCloseButton = detailModal.querySelector('.modal-close');
    detailModalCloseButton.addEventListener('click', detailModalCloseClickHandler);

    //Start the application with loading the API data
    ajaxRequest(apiUrl, createGenshinCharacters);
}

/**
 * AJAX-call to retrieve data from a webservice
 *
 * @param url
 * @param successHandler
 */
function ajaxRequest(url, successHandler)
{
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(successHandler)
        .catch(ajaxErrorHandler);
}

/**
 * Create initial Pokémon cards based on initial API data
 *
 * @param data
 */
function createGenshinCharacters(data)
{
    //Loop through the list of Genshin characters
    for (let genshin of data) {
        //Wrapper element for every Genshin character. We need the wrapper now, because adding it later
        //will result in genshin characters being ordered based on the load times of the API instead of chronically
        let genshinCharacter = document.createElement('div');
        genshinCharacter.classList.add('genshin-character');
        genshinCharacter.dataset.name = genshin.name;

        //Append Genshin character to the actual HTML
        gallery.appendChild(genshinCharacter);


    //Wrapper element for every genshin character
     genshinCharacter = document.querySelector(`.genshin-character[data-name='${genshin.name}']`);

    //Element for the name of the genshin character
    let name = document.createElement('h2');
    name.innerHTML = `${genshin.name} (#${genshin.id})`;
    genshinCharacter.appendChild(name);

    //Element for the image of the genshin character
    let image = document.createElement('img');
    image.src = `images/${genshin.image}`;
    genshinCharacter.appendChild(image);

    //Element for the button to load the description of the genshin character
    let button = document.createElement('button');
    button.setAttribute("class", "description")
    button.innerHTML = 'Description';
    button.dataset.id = genshin.id;
    genshinCharacter.appendChild(button);

    //Element for the button to add favorite your genshin character
    let favbutton = document.createElement('button');
    favbutton.setAttribute("class","favorites");
    favbutton.innerHTML= 'favorite';
    for (favorite of favorites){
        if(favorite == genshin.id){
            favbutton.classList.replace("favorites","favorited");
        }
    }
    favbutton.dataset.id = genshin.id;
    genshinCharacter.appendChild(favbutton);


    //Store Genshin data globally for later use in other functions
    genshinData[genshin.id] = genshin;
    }
}


/**
 * Show an error message to inform the API isn't working correctly
 *
 * @param data
 */
function ajaxErrorHandler(data)
{
    console.log(data);
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = 'Er is helaas iets fout gegaan met de API, probeer het later opnieuw';
    gallery.before(error);
}

/**
 * Open the detailview with information of a Pokémon
 *
 * @param e
 */
function genshinClickhandler(e) {
    let clickedItem = e.target;

    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }
    //Check if we clicked on a description button
    if (clickedItem.className !== ('description')) {
        return;
    }

    //Get the information from the global stored data
    let genshin = genshinData[clickedItem.dataset.id];

    //Reset the content
    detailModalContent.innerHTML = '';

    //Show the name we used on the main grid
    let name = document.createElement('h1');
    name.innerHTML = `${genshin.name} (#${genshin.id})`;
    detailModalContent.appendChild(name);
    ajaxRequest(apiUrl + `?id=${genshin.id}`, genshinDescription);
}

function favClickhandler(e) {
    let clickedItem = e.target

    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }
    //Check if we clicked on a genshin character who isn't favorited
    if (clickedItem.className === 'favorites'){
        addFavorites(clickedItem);
    }
    else{
        removeFavorites(clickedItem);
    }
}


function genshinDescription(data){
    let description = document.createElement('p');
    description.innerHTML = `${data.description}`
    detailModalContent.appendChild(description);
    detailModal.classList.add('open');
}

function addFavorites(clickedItem){
    clickedItem.classList.replace("favorites", "favorited");
    favorites.push(clickedItem.dataset.id);
    localStorage.setItem("favorites", JSON.stringify(favorites))
}

function removeFavorites(clickedItem){
    if (clickedItem.className !== 'favorites') {
        let index = favorites.indexOf(clickedItem.dataset.id);
        clickedItem.classList.replace("favorited", "favorites");
        favorites.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
}
/**
 * Close the modal
 *
 * @param e
 */
function detailModalCloseClickHandler(e)
{
    detailModal.classList.remove('open');
}