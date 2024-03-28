


function startGame() {
    let pixel = document.createElement("div")
    pixel.style.background = "red";
    pixel.style.height = "15px";
    pixel.style.width = "15px";
    pixel.style.margin = "1px"
    document.getElementById("game").append(pixel)
}

function make() {
    for (let i = 0; i < 1500; i++) {
        startGame()
    }
}




function eatenFood() {
    let kwadracik = document.createElement("div");
    kwadracik.style.background = "red";
    kwadracik.style.height = "30px";
    kwadracik.style.width = "30px";

    const randomTop = Math.floor(Math.random() * (600 - 30));
    const randomLeft = Math.floor(Math.random() * (600 - 30));

    kwadracik.style.position = "absolute";
    kwadracik.style.top = randomTop + "px";
    kwadracik.style.left = randomLeft + "px";

    document.getElementById("board").append(kwadracik);
}


