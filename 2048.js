let board;

let score = 0;

let rows = 4;
let columns = 4;

// window.onload = function() {
//     setGame()
// }

function setGame() {
    console.log("przedBoard")
    board = [
        [0, 2, 0, 0],
        [0, 0, 4, 0],
        [0, 0, 0, 0],
        [0, 0, 4096, 0]
    ]
    console.log("poBoard")

    for (let r = 0; r < rows; r++) {
        console.log("outerFor")
        for (let c = 0; c < columns; c++) {
            console.log("innerFor")

            let tile = document.createElement("div"); // creates a <div></div> inside #board
            tile.id = r.toString() + "-" + c.toString(); //gives every created div and id equal to its row-column; div(1) id = "0-0"
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }
}

function updateTile(tile, num) {
    console.log("updateTile")
    tile.innerText = "";
    tile.classList.value = ""; //clear the classList
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num;
        if (num <= 4096) {
            tile.classList.add("x"+num.toString());
        } else {
            tile.classList.add("x8192");
        }
    }
 }
