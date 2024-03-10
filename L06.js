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
    rollABetterDie()
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

