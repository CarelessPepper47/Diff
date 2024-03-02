

let dice = Math.floor(Math.random() * 6) + 1;

let dice20 = Math.floor(Math.random() * 20) + 1;

let playerName = prompt("Podaj swoje imię", "Bubol")

let chest = 5; // dorobić tu o wiele wiecej opcji

const knife = {
    damage: 2,
    times: 2,
    cost: 1
}

const sword = {
    damage: 4,
    times: 1,
    cost: 2
}

const shield = {
    damage: 0,
    times: 1,
    cost: 1
}

const staff = {
    damage: 10,
    times: 1,
    cost: 3
}

const classes = [
    {
        className: "Rogue",
        weapon: knife,
        health: 10,
        actions: 4,
        luck: 5,
        backpack: ["key"],
        coins: 4
    },
    {
        className: "Knight",
        weapon: [sword, shield],
        health: 15,
        actions: 5,
        luck: 2,
        backpack: [],
        coins: 5
    },
    {
        className: "Mage",
        weapon: [staff],
        health: 7,
        actions: 4,
        luck: 3,
        backpack: [],
        coins: 1
    }
]

let kill = 0;

let attempts = 0;

let wybierzKlase = prompt("Choose Class: Knight, Rogue or Mage")

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


let coin = 1;

let player = {
    name: playerName,
    money: 10 + kill + chosenOne.coins,
    class: wybierzKlase,
    weapon: chosenOne.weapon,
    hp: chosenOne.health,
    actions: chosenOne.actions,
    luck: chosenOne.luck
}

let monsters = [
    {
        monsterName: "Gargoyle",
        health: 8,
        damgae: 2,
    },
    {
        monsterName: "Imp",
        health: 5,
        damage: 1,
    }
    
]

let monster = Math.floor(Math.random() * monsters.length) +1;


let rolls = 0;

let randomNumber;

// for (i = randomNumber/2; i <= randomNumber; i *= 2) {

// }

let decision;

function rollDice() {

    if (randomNumber < 3) {
        console.log(`An Imp is nearby!`)
        monster = monsters[1]
        rolls++
    } else if (randomNumber >= 3 && randomNumber < 6 ) { // && rollDice < 6
        console.log(`A Gargoyle is nearby. Be cautious!`)
        monster = monsters[0]
        rolls++
    } else if (randomNumber === 6) {
        console.log(`There is a Chest!`)
        decision = prompt("Do you want to open it?", "Yes or No")
        return randomNumber = Math.floor(Math.random() * 6) + 1;
    }
    return randomNumber = Math.floor(Math.random() * 6) + 1;
}

if (decision === "Yes") {
    player.money = player.money + 5;
    console.log("Hajs jest")
} else {
    player.luck = player.luck + 1;
    console.log("Brak Hajsu")
}


function encounter() {
    if (rolls === 0) {
        console.log("There is nothing to fight jackass.")
    } else {
        console.log(`${playerName} fights with ${monster.monsterName}`) 
    }
}