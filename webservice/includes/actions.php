<?php
/**
 * @return array
 */
function getGenshin()
{
    return [
        [
            "id" => 1,
            "name" => "Albedo",
            "title" => "Chief Alchemist of the Knights of Favonius",
            "image" => "../images/albedo.png",
        ],
        [
            "id" => 2,
            "name" => "Aloy",
            "title" => "Nora Huntress",
            "image" => "../images/aloy.png",
        ],
        [
            "id" => 3,
            "name" => "Amber",
            "title" => "Outrider",
            "image" => "../images/amber.png",
        ],
        [
            "id" => 4,
            "name" => "Arataki Itto",
            "title" => "The First and Greatest Head of the Arataki Gang",
            "image" => "../images/itto.png",
        ],
        [
            "id" => 5,
            "name" => "Barbara",
            "title" => "Deaconess",
            "image" => "../images/barbara.png",
        ],
        [
            "id" => 6,
            "name" => "Beidou",
            "title" => "Queen of the Crux Fleet",
            "image" => "../images/beidou.png",
        ],
        [
            "id" => 7,
            "name" => "Bennett",
            "title" => "Leader of Benny's Adventure Team",
            "image" => "../images/bennett.png",
        ],
        [
            "id" => 8,
            "name" => "Chongyun",
            "title" => "Banisher of Evil and Rumors Thereof",
            "image" => "../images/chongyun.png",
        ],
        [
            "id" => 9,
            "name" => "Diluc",
            "title" => "Master of the Dawn Winery",
            "image" => "../images/diluc.png",
        ],
        [
            "id" => 10,
            "name" => "Diona",
            "title" => "Popular bartender of the Cat's Tail",
            "image" => "../images/diona.png",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getGenshindetails($id)
{
    $tags = [
        1 => [
            "description" => "A synthetic human made by the alchemist Rhinedottir, the mysterious Albedo is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius. Through a recommendation from the adventurer Alice, with Sucrose as his assistant, he holds an infinite desire to learn about the world of Teyvat, carefully studying every object around him.",
            "tags" => ['Geo', 'Mondstadt', 'Sword']
        ],
        2 => [
            "description" => "She is the heroine from Horizon Zero Dawn and is introduced as a collaboration and crossover character between Guerrilla Games and miHoYo.",
            "tags" => ['Cryo', 'Bow']
        ],
        3 => [
            "description" => "As the only remaining Outrider of the Knights of Favonius, she is always ready to help the citizens of Mondstadt — whether it be something simple or perhaps a more challenging task.",
            "tags" => ['Pyro', 'Mondstadt', 'Bow']
        ],
        4 => [
            "description" => "A descendant of the crimson oni, Itto is also the leader and founder of the Arataki Gang.",
            "tags" => ['Geo', 'Inazuma', 'Claymore']
        ],
        5 => [
            "description" => "She is the deaconess of the Church of Favonius and a self-proclaimed idol after learning about them from the intrepid adventurer Alice. She is also the daughter of Frederica Gunnhildr and Seamus Pegg, and the younger sister of Jean. Through Frederica she is a descendant of the prestigious Gunnhildr Clan.",
            "tags" => ['Hydro', 'Mondstadt', 'Catalyst']
        ],
        6 => [
            "description" => "She is the captain of The Crux, a renowned crew in Liyue. Besides her capabilities as a fleet captain and her immense strength, many in Liyue know her for her lack of fear towards the Tianquan of the Liyue Qixing, Ningguang — a trait that the other appreciates, yet grows irritated by.",
            "tags" => ['Electro', 'Liyue', 'Claymore']
        ],
        7 => [
            "description" => "An orphan discovered by an elderly adventurer as a baby, Bennett was raised in Mondstadt's Adventurers' Guild. He is the one and only member of Bennys Adventure Team, as everyone else left the team after experiencing the constant misfortune that follows him.",
            "tags" => ['Pyro', 'Mondstadt', 'Sword']
        ],
        8 => [
            "description" => "An exorcist from Liyue, Chongyun was born with excessive yang (positive) energy, which has proven to be both a help and a hindrance. It makes him a very effective exorcist, but it also means he has never seen a spirit for himself — they flee before he can even lay eyes on them. It has also made him particularly susceptible to any kind of heat or strong emotion, which leads to some rather... unexpected results.",
            "tags" => ['Cryo', 'Liyue', 'Claymore']
        ],
        9 => [
            "description" => "Born into the affluent Ragnvindr Clan, Diluc is the current owner of the Dawn Winery and a nobleman of high esteem in Mondstadt society. While a past incident caused him to split ways with the Knights of Favonius, he continues to protect Mondstadt in his own way.",
            "tags" => ['Pyro', 'Mondstadt', 'Claymore']
        ],
        10 => [
            "description" => "Despite being a bartender at Cat's Tail, she actually despises alcohol and wants nothing more than to ruin Mondstadt's wine industry—a feat easier said than done when her patrons absolutely love her drinks. She is the daughter of Draff, a hunter in Springvale.",
            "tags" => ['Cryo', 'Mondstadt', 'Bow']
        ],

    ];

    return $tags[$id];
}
