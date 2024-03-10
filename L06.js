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
    rolledBetterDie()
}

function updateBetterDie() {
    document.getElementById("sides").innerText = sidesNumber;
}
function rolledBetterDie() {
    document.getElementById("rolled").innerText = betterDie;
}

