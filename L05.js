for (let i = 1; i <= 10; i++) {
    console.log("dupa");
}

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Print out "Da ba dee da ba daa" 6 times, using a for loop

// for (let i = 1; i <= 6; i++) {
//     console.log("Da ba dee da ba daa");
// }

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

for (let i = 2; i <= 50; i *= 2) {
    console.log(i)
}

let tydzien = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]

for (let i = 0; i < tydzien.length; i++) {
    console.log(i, tydzien[i])
}

for (let i = tydzien.length-1; i >= 0; i--) {
    console.log(i, tydzien[i])
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; 

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase())
}

let przyklad = "Z dupy";

for (i = 0; i <= 5; i++) {
    console.log("Outer: Gówno", i);
    for (j = 0; j < przyklad.length; j++) {
        console.log("Inner:", przyklad[j])
    }
}

let psz = "psz";

for (i = 1; i < 6; i += 2) {
    console.log(i, psz.toUpperCase())
    for (j = i/2; j < 3 ; j++) {
        console.log(j, "dum")
    }
}

let seatingCharts = [
    ["Olek", "Alek", "Bolek"],
    ["Ogla", "Googla", "That's Rojo Caliente", "Łogoła"],
    ["La", "Isla", "Bonita"]
]

for (i = 0; i < seatingCharts.length; i++) {
    const row = seatingCharts[i];
    console.log(`Row ${i+1}`)
    for (j = 0; j < row.length; j++) {
        console.log(`       ${row[j]}`)
    }
}
console.log("CIAAAAK");


let num = 0;

while (num <= 5) {
console.log(num);
num++;
}

// const SEKRET = "Ciak Ciak Ciaaak"

// let zgadnij = prompt("Miłość miłość miłość?")

// while (zgadnij !== SEKRET) {
//     console.log("MIŁOŚĆ MIŁOŚĆ MIŁOŚĆ??!")
//     zgadnij = prompt("Hmmmm??")
// }


let targetNum = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

let ile = 0;

while (true) {
    guess = Math.floor(Math.random() * 10);
    ile++;
    if (guess === targetNum) {
        console.log(`Yaaaaz, the number was ${targetNum}`);
        break;
    }
    else {
        console.log(`Nope, not ${guess}`)
    }
}
console.log(`To zabralo ${ile} prób`)



function makeAGuess() {

let max = parseInt(prompt("Let's play a game, give me a number", "17"))

while (!max) {
    max = parseInt(prompt("Must be a number", "17"))
}

let target = Math.floor(Math.random() * max) + 1;

let makeAGuess = parseInt(prompt("Make a guess"));

while (!makeAGuess) {
    makeAGuess = parseInt(prompt("Must be a number", "GUESS!"))
}

let attempts = 0;

while (parseInt(makeAGuess) !== target) {
    if (makeAGuess === "GG") {
        break;
    }
    attempts++;
    if (makeAGuess > target) {
        console.log("Too big")
        makeAGuess = prompt("Again");
    } else if (makeAGuess < target) {
        console.log("Too low")
        makeAGuess = prompt("Again");
    } else if (makeAGuess === target) {
        console.log(`Bravo! It was ${makeAGuess}`)
    }
}
if (makeAGuess === "GG") {
    console.log("Cienias")
} else {
    console.log(`It took ${attempts} attempts`)
}
}

let subreddits = ["shittydarksouls", "fromsoftware", "bloodborne", "Elden Ring", "EldenLoreTalk"]

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

for (sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`)
}

for (row of seatingCharts) {
    for (imie of row) {
        console.log(`${imie}`)
    }
}

const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:

for (let anyNum of numbers) {
    console.log(`${anyNum*anyNum}`)
}

const midterms = {
    Adam: 98,
    Lol: 86,
    Git: 69,
    Goge: 24
}

for (let person in midterms) {
    console.log(`${person}`)
    console.log(`${person} scored: ${midterms[person]}`)
}

const keyeses = Object.keys(midterms) // it will give me an array of keys:
// [Adam, Lol. Git, Goge]

const valueseses = Object.values(midterms) // it will give me an array of values:
// [98, 86, 69, 24]

for (let person of keyeses) {
    console.log(person)
}

let total = 0;

for (let score of valueseses) {
    total += score
}
console.log(total)
console.log(`There were ${valueseses.length} participants.`)
console.log(`The average score was: ${total/(valueseses.length +1)}`)