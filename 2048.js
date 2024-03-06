// nic zmiany byleby dodać do gita

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
        [0, 0, 4, 4],
        [0, 0, 4, 4],
        [16, 16, 8, 8],
        [16, 16, 8, 8]
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

 document.addEventListener("keyup", (e) => {
    if (e.code == "ArrowLeft") {
        slideLeft();
    }
 })

 function filterZero(row) {
    return row.filter(num => num != 0);
 }

 function slide(row) {
    row = filterZero(row);
    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] == row[i+1]) {
            row[i] *= 2;
            row[i+1] = 0;
            score += row[i]
        }//check every 2
    }
    row = filterZero(row);
    while (row.length < columns) {
        row.push(0);
    }
    return row
 }

 function slideLeft() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = slide(row);
        board[r] = row

        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c]
            updateTile(tile, num);
        }
    }
 }
