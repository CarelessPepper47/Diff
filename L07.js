let totalEggs = 0;

function collectEggs() {
    totalEggs = 6
}

console.log(totalEggs)




let bird = "KokoKoko"

function jakiBird() {
    let bird = "EuroSpoko"
    bird; // "EuroSpoko"
}

bird; // "KokoKoko"



// BLOCK Scopes
let radius = 8; 

if (radius > 0) {
    const PI = 3.14159
    let msg = "Hiii"
}
console.log(radius) // calls 8, PI and msg, stay inside the If BLOCK


for (var i = 0; i < 5; i++) {
    var msg = "DUPA" 
    console.log(msg) // "DUPA"
}
console.log(msg); // "DUPA"
console.log(i); // 5 // var command actually creates the variable
// and it is possible to use it at every case



// Lexical Scoping
function bankRobbery() {
    const heroes = ["Spiderman", "Wolverine"]
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`Please help us, ${hero.toUpperCase()}`)
        }
    }
    cryForHelp()
}

bankRobbery()

/////////////////////////////////// Function Expressions

// function add(x, y) {
//     return x + y;
// }

const add = function(x, y) {
    return x + y
}

// Define a function that returns the square of a number. Define the function as a function expression, 
// stored in a variable called square.  NOTE: Udemy's coding exercise platform does NOT support the ** operator. 

// square(4) //16
// square(3) //9

const square = function(x) {
    return x*x
}