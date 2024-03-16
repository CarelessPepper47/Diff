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

const isChild = makeBetweenFunc(0, 18)
const isAdult = makeBetweenFunc(19, 64)
const isSenior = makeBetweenFunc(65, 120)

isSenior(20);

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
"hello".toUpperCase() // "HELLO" => string method
[1, 2, 3].indexOf(2) // 1 => array method

const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num*num;
    },
    cube: function (num) {
        return num ** 3
    }
}

myMath.square(3) // 9
myMath.cube(3) // 27
myMath["cube"](3) // 27

const math = {
    black: "hi!",
    add(x, y) {
        return x + y
    },
    multiply(x, y) {
        return x * y
    }
}

math.add(50, 60) // 110

// Define an object called square, which will hold methods that have to do with the geometry of squares. 
// It should contain two methods, area and perimeter 

// area should accept the length of a side (all sides are the same in a square) and then return the side squared. 

// perimeter should accept the length of a side and return that side multiplied by 4.

// square.area(10) //100
// square.perimeter

const exSquare = {
    area(length) {
        return length * length
    },
    perimeter(length) {
        return length * 4
    }
}

// THIS

const cat = {
    name: "Dupa",
    colot: "grey",
    breed: "mini kot",
    miau() {
        console.log(`${this.name} says MIAUU`)
    }
}

const miau2 = cat.miau() // wont call the NAME, it will refer to: WINDOW the default object

function scream() {
    console.log("AHHHHHHHH")
}

scream() // AHHHHHHHH

window.scream() // AHHHHHHHH // this.scream() is the same

// Define an object called hen.  It should have three properties:
// name should be set to 'Helen'
// eggCount should be set to 0
// layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.

// hen.name // "Helen"
// hen.eggCount // 0
// hen.layAnEgg() // "EGG"
// hen.layAnEgg() // "EGG"
// hen.eggCount // 2

const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount++
        return console.log("EGG")
    }
}

// const hen = {
//     name: "Helen",
//     eggCount: 0,
//     layAnEgg() {
//         return this.eggCount++, "EGG"
//     }
// }