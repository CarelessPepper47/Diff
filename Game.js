

let dice = Math.floor(Math.random() * 6) + 1;

let dice20 = Math.floor(Math.random() * 20) + 1;

let playerName = prompt("Podaj swoje imię", "Bubol")

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

const classes = [
    {
        className: "Rogue",
        weapon: knife,
        health: 10,
        actions: 4,
        luck: 5,
        backpack: ["key"]
    },
    {
        className: "Knight",
        weapon: sword,
        health: 15,
        actions: 5,
        luck: 2,
        backpack: []
    }
]

let attempts = 0;

let wybierzKlase = prompt("Choose Class: Knight, Rogue")

while (wybierzKlase !== classes[0].className || classes[1].className) {
    if (wybierzKlase === classes[0].className) {
        console.log(`You are ${classes[0].className} and your name is ${playerName}`)
        break;
    } else if (wybierzKlase === classes[1].className) {
        console.log(`You are ${classes[1].className} and your name is ${playerName}`)
        break;
    }
    if (attempts < 5) {
        attempts++
        wybierzKlase = prompt("It has to be Knight or Rogue")
    }
    else if (attempts >= 5 && attempts <= 15) {
        attempts++
        wybierzKlase = prompt("Omg dude! Knight or Rogue!")
    } else  if (attempts > 15) {
        attempts++
        wybierzKlase = prompt("DUDE!")
    }
}


let coin = 1;

let player = {
    name: playerName,
    money: 10 + coin,
    class: wybierzKlase
}

alert("")