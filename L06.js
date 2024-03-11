let die;

function app() {
    die = Math.floor(Math.random() * 6) + 1
    updateDice()
}

function updateDice() {
    document.getElementById("roll").innerText = die;
}

// Write your function here:

function printHeart() {
    console.log("<3");
}

printHeart();

let sidesNumber;

function giveNumberForDie() {
    if (!sidesNumber) {
        sidesNumber = parseInt(prompt("How many sides?"))
    }
    updateBetterDie();
    rollABetterDie();
}

function reset() {
    sidesNumber = null;
    document.getElementById("sides").innerText = 0
    document.getElementById("rolled").innerText = 0
}

let betterDie;

function rollABetterDie() {
    betterDie = Math.floor(Math.random() * sidesNumber) + 1
    document.getElementById("rolled").innerText = betterDie;
}

function updateBetterDie() {
    document.getElementById("sides").innerText = sidesNumber;
}

// DEFINE YOUR FUNCTION: 
function rant(messege) {
    console.log(`${messege.toUpperCase()}`)
    console.log(`${messege.toUpperCase()}`)
    console.log(`${messege.toUpperCase()}`)
}

rant("I hate beets")

let str = prompt("Co tam mordo")

function repeat(str, y) {
    for (let i = 0; i < y; i++) {
        console.log(str)
    }

    let repetition = "";
    for (let i = 0; i < y; i++) {
        repetition += str;
    } 
    console.log(repetition)
}

repeat(str, 3)

// define isSnakeEyes below:

function isSnakeEyes(side1, side2) {
    Math.floor(Math.random() * side1) +1;
    Math.floor(Math.random() * side2) +1;
    
    if (side1 === 1 && side2 === 1) {
        console.log(`Snake Eyes!`)
    }
    
    else {
        console.log("Not Snake Eyes!")
    }
    
}

isSnakeEyes(6, 6)

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x + y
    return sum;
}

// DEFINE YOUR FUNCTION BELOW:

function multiply(x,y) {
    return x * y;
}

let mnozenie = multiply(x,y)


