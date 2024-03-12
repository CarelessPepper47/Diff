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

const greet = function() {console.log("Hi")}

function callTwice(func) {
    func()
    func()
}


function makeMysteryFunc() {
    let num = Math.random()
    if (num > 0.5) {
        return function() {
            console.log("Congrats!")
            console.log("Congrats!")
        }
    } else {
        return function() {
            alert("Dupa")
            alert("Dupa")
        }
    }
}

const mystery = makeMysteryFunc()



function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && min <= max
    }
}

const testRange = function(num) {
    return num >= min && min <= max
}

function isBetween(num) {
    return num >= 1 && num <= 10
}

function isBetween(num) {
    return num >= 50 && num <= 100
    // if (num >= 50 && num <= 100) {
    //     return true
    // } else {
    //     return false
    // }
}

makeBetweenFunc(50, 100)