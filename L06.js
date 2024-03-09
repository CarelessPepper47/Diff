let die;

function app() {
    die = Math.floor(Math.random() * 6) + 1
    updateDice()
}

function updateDice() {
    document.getElementById("roll").innerText = die;
}