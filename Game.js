

let dice = Math.floor(Math.random() * 6) + 1;

let dice20 = Math.floor(Math.random() * 20) + 1;

let playerName = prompt("Podaj swoje imię", "Bubol")

const eQItems = [ 
{knife: 
    {damage: 2,
    times: 2,
    cost: 1}
}, 
{sword: 
    {damage: 4,
    times: 1,
    cost: 2}
},
{battleAxe: 
    {damage: 5,
    times: 2,
    cost: 3}
},
{legendarySword: 
    {damage: 6,
    times: 1,
    cost: 1,
    healthOnUse: 2}
},
{shield: 
    {damage: 0,
    times: 1,
    cost: 1}
},
{staff: 
    {damage: 10,
    times: 1,
    cost: 3}
}
]


const pickle = {
    healthOnUse: 2
}

let chest = [5, {legendarySword: eQItems[3]}, "Rubbish", {pickle: pickle}, {battleAxe: eQItems[2]}];

const classes = [
    {
        className: "Rogue",
        weapon: eQItems[0],
        health: 10,
        actions: 4,
        luck: 5,
        backpack: ["key"],
        coins: 4
    },
    {
        className: "Knight",
        weapon: eQItems[1],
        health: 15,
        actions: 5,
        luck: 2,
        backpack: [eQItems[4]],
        coins: 5
    },
    {
        className: "Mage",
        weapon: eQItems[5],
        health: 7,
        actions: 4,
        luck: 3,
        backpack: [],
        coins: 1
    }
]

let kill = 0;

let attempts = 0;

let wybierzKlase = prompt("Choose Class: Knight, Rogue or Mage", "Mage")

while (wybierzKlase !== classes[0].className || classes[1].className || classes[2].className) {
    if (wybierzKlase === classes[0].className) {
        console.log(`You are ${classes[0].className} and your name is ${playerName}`)
        break;
    } else if (wybierzKlase === classes[1].className) {
        console.log(`You are ${classes[1].className} and your name is ${playerName}`)
        break;
    } else if (wybierzKlase === classes[2].className) {
        console.log(`You are ${classes[2].className} and your name is ${playerName}`)
        break;
    }
    
    if (attempts < 5) {
        attempts++
        wybierzKlase = prompt("It has to be Knight, Rogue or Mage")
    }
    else if (attempts >= 5 && attempts <= 15) {
        attempts++
        wybierzKlase = prompt("Omg dude! Knight, Rogue or Mage!")
    } else  if (attempts > 15) {
        attempts++
        wybierzKlase = prompt("DUDE!")
    }
}

let chosenOne;

if (wybierzKlase === classes[0].className) {
    chosenOne = classes[0];
} else if (wybierzKlase === classes[1].className) {
    chosenOne = classes[1];
} else {
    chosenOne = classes[2]
}

let frags = [];

let coin = 1;

let player = {
    name: playerName,
    money: 10 + kill + chosenOne.coins,
    class: wybierzKlase,
    weapon: chosenOne.weapon,
    hp: chosenOne.health,
    actions: chosenOne.actions,
    luck: chosenOne.luck,
    backpack: chosenOne.backpack
}

let monsters = [];

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// List of different monster names
const monsterNames = [
  "Gargoyle",
  "Dragon",
  "Vampire",
  "Werewolf",
  "Banshee",
  "Kraken",
  "Sphinx",
  "Minotaur",
  "Hydra",
  "Cyclops",
  // Add more monster names as needed
];

// Flag to keep track if the Kraken has been created
let krakenCreated = false;

// Generating 50 different monsters
for (let i = 0; i < 50; i++) {
  let monsterName = monsterNames[getRandomNumber(0, monsterNames.length - 1)];
  let health = getRandomNumber(1, 50);
  let damage = getRandomNumber(1, 10);

  // Check if the monster is a dragon and has less than 25 health
  if (monsterName === "Dragon" && health < 25) {
    monsterName = "Small Dragon";
    // Limiting damage for Small Dragon
    damage = Math.min(damage, 15);
  }

  // Check if the monster is a Kraken and if Kraken hasn't been created yet
  if (monsterName === "Kraken" && !krakenCreated) {
    // Cap health and damage for Kraken
    health = 50;
    damage = 30;
    krakenCreated = true; // Set flag to true after creating Kraken
  }

  let monster = {
    monsterName: monsterName,
    health: health,
    damage: damage
  };
  monsters.push(monster);
}

// let monsters = [
//     {
//         monsterName: "Gargoyle",
//         health: 8,
//         damage: 2,
//     },
//     {
//         monsterName: "Imp",
//         health: 5,
//         damage: 1,
//     },
//     {
//         monsterName: "Dragon",
//         health: 25,
//         damage: 5,
//     },
//     {
//         monsterName: "Ghoul",
//         health: 7,
//         damage: 1.5,
//     },
//     {
//         monsterName: "Pixie",
//         health: 1,
//         damage: 2,
//     }

    
// ]

let monster = monsters[Math.floor(Math.random() * monsters.length) +1]


let rolls = 0;

let randomNumber;

let chestDrop = Math.floor(Math.random() * chest.length);

// for (i = randomNumber/2; i <= randomNumber; i *= 2) {

// }

let decision;

let combat; 

let steps = 0;

function rollDice() {
    steps++

    if (randomNumber > 1 && randomNumber < 6 || randomNumber > 7 && randomNumber < 10) {
        monster = monsters[Math.floor(Math.random() * monsters.length)]
        console.log(`${monster.monsterName} is nearby!`)
        rolls++
    } else if (randomNumber === 6) {
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        chest = shuffleArray(chest);
        console.log(`There is a Chest!`)
        decision = prompt("Do you want to open it?")
        if (decision === "Yes") {
        for (let item of chest) {
            if (typeof item === 'number') {
                console.log(`Found ${item} coins!`);
                player.money += item;
                break;
            } else if (typeof item === 'string') {
                console.log(`Found a string: ${item}`);
                if (item === "Rubbish") {
                    player.backpack.push(item);
                }
                break;
            } else if (typeof item === 'object') {
                // Check if the object has a name
                let itemName = Object.keys(item)[0];
                if (itemName) {
                    console.log(`Found an object named ${itemName}:`);
                    console.log(item[itemName]);
                    player.backpack.push(item);
                    break;
                } else {
                    console.log("Found an unnamed object:", item);
                    break;
                }
            } else {
                console.log("Found something else:", item);
                return randomNumber = Math.floor(Math.random() * 20) + 1;
            }
        }
    }   else if (decision === "Break") {
        console.log("You destroyed Chest and acquired Rubbish")
        player.backpack.push("Rubbish")
        return randomNumber = Math.floor(Math.random() * 20) + 1;
    } 
        } else {
            console.log("Nothing happens, go futher");
            return randomNumber = Math.floor(Math.random() * 20) + 1;
        }
    //     if (decision === "Yes") {
    //         if (chest[chestDrop] === Number) {
    //         player.money += chest[chestDrop]
    //         console.log(`You acquired ${chest[chestDrop]} coins!`)
    //         chestDrop = Math.floor(Math.random() * chest.length);
    //         return randomNumber = Math.floor(Math.random() * 20) + 1;
    //     } else {
    //         player.backpack.push(chest[chestDrop])
    //         if (chestDrop === 1) {
    //             console.log(`You acquired Legendary Sword!`)
    //             chestDrop = Math.floor(Math.random() * chest.length);
    //             return randomNumber = Math.floor(Math.random() * 20) + 1;
    //         } else if (chestDrop === 3) {
    //             console.log(`You acquired a pickle!`)
    //             chestDrop = Math.floor(Math.random() * chest.length);
    //             return randomNumber = Math.floor(Math.random() * 20) + 1;
    //         } else if (chestDrop === 4) { 
    //             console.log(`You acquired a Battle Axe!`)
    //             chestDrop = Math.floor(Math.random() * chest.length);
    //             return randomNumber = Math.floor(Math.random() * 20) + 1;
    //         }
    //         chestDrop = Math.floor(Math.random() * chest.length);
    //     }
    //     } else if (decision === "Break") {
    //             console.log("You destroyed Chest and acquired Rubbish")
    //             player.backpack.push("Rubbish")
    //     } else if (decision !== "Yes") {
    //         console.log("You decided not to open Chest and move along.")
    //     }
    //     return randomNumber = Math.floor(Math.random() * 10) + 1;
    // } else {
    //     console.log("Nothing happens, go futher");
    //     return randomNumber = Math.floor(Math.random() * 10) + 1;
    // }
    return randomNumber = Math.floor(Math.random() * 20) + 1;
}

// if (decision === "Yes") {
//     player.money = player.money + 5;
//     console.log("Hajs jest")
// } else {
//     player.luck = player.luck + 1;
//     console.log("Brak Hajsu")
// }



function encounter() {
    if (rolls === 0) {
        console.log("There is nothing to fight jackass.")
    } else {
        // while (monster.health > 0) {
        console.log(`${playerName} fights with ${monster.monsterName}`) 
        let attack = prompt("Zaatakuj");
        if (parseInt(attack) <= monster.health) {
            combat = true;
            while (combat === true) {
                console.log(`You attacked for ${attack}!`) 
                monster.health -= attack; 
                if (attack < monster.health) {
                attack = prompt("Jeszcze raz");
                } else if (attack >= monster.health) {
                    attack;
                    kill++
                    player.money += kill
                    randomNumber = 0;
                    rolls = 0;
                    console.log(`You killed ${monster.monsterName}!`)
                    console.log(`You've got ${kill} coins!`)
                    frags.push(monster.monsterName)
                    if (monster.health <= 0) {
                        monster.health = Math.floor(Math.random() * 30) +1;
                    }
                    if (monster.monsterName === "Dragon") {
                        monsters.pop(2)
                    }
                    monster = monsters[Math.floor(Math.random() * monsters.length)]
                    combat = false;
                    break;
                } else {
                    attack = prompt("Nie wydurniaj się, dawaj")
                }
            }
        } 
        else if (parseInt(attack) > monster.health) {
                    attack;
                    kill++
                    player.money += kill
                    randomNumber = 0;
                    rolls = 0;
                    console.log(`You killed ${monster.monsterName}!`)
                    console.log(`You've got ${kill} coins!`)
            } 
            else if (attack === "Run") {
                randomNumber = 0;
                rolls = 0;
                console.log("You run away!")
                combat = false;
                }
            }
        }
        // monster = monsters[Math.floor(Math.random() * monsters.length)]
        // if (monster.health <= 0) {
        //     monster.health = Math.floor(Math.random() * 30)
        // }
        // combat = false;

        function chooseWeaponToEquip() {
            console.log("Available Weapons:");
            // Iterate over the backpack and display the weapons available for selection
            player.backpack.forEach((item, index) => {
                if (typeof item === 'object') {
                    let itemName = Object.keys(item)[0];
                    console.log(`${index + 1}: ${itemName}`);
                }
            });
        
            let choice = prompt("Enter the index of the weapon to equip:");
            if (choice === "Back") {
                console.log("Canceled.");
                return; // Cancel the function
            }
            choice = parseInt(choice)
            if (!isNaN(choice) && choice >= 1 && choice <= player.backpack.length) {
                // If there is a previously equipped weapon, put it back in the backpack
                if (player.weapon) {
                    player.backpack.push(player.weapon);
                }
                // Equip the chosen weapon and remove it from the backpack
                player.weapon = player.backpack.splice(choice - 1, 1)[0];
                console.log(`You equipped:`, player.weapon);
            } else {
                console.log("Invalid choice!");
            }
        }

            
    




function showMe() {
    // console.log(player)
    // // for (i = 0; i < size; i++) {
    // //     console.log(Object.values(player));
    // //     for (j = 0; j = size; j++) {
    // //         console.log(Object.keys(player))
    // //     }
    // // }
    for (const property in player) {
        console.log(`${property}: ${JSON.stringify(player[property])}`);
    }
}



