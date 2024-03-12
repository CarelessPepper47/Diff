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

let x = 3
let y = 2

function multiply(x, y) {
    return x * y;
}

let mnozenie = multiply(x,y)



function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return false
    } else {
        return true
    }
}

isShortsWeather(76)

// Please write a function called lastElement which accepts a single array argument.  
// The function should return the last element of the array (without removing the element).  
// If the array is empty, the function should return null.

// lastElement([3,5,7]) //7
// lastElement([1]) //1
// lastElement([]) //null

function lastElement(arr) {
    if (arr.length === 0) {
        return null
    } else {
    return arr[arr.length - 1]
    }
}

// Define a function called capitalize that accepts a string argument and returns 
// a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

// capitalize('eggplant') // "Eggplant"
// capitalize('pamplemousse') // "Pamplemousse"
// capitalize('squid') //"Squid"
// Hints:

// Remember that strings are immutable, meaning that you cannot simply change the first 
// letter in the original string.  You will need to make a new string that you return.

// Single out the first letter and capitalize it. (use a string method to help!)

// Add that first letter to the rest of the original string, sliced to omit the original 
// first letter (use a string method to help!)

// For example: 'eggplant' becomes 'E' + 'ggplant'


function capitalize(dupa) {
    return dupa.charAt(0).toUpperCase() + dupa.slice(1)
}

// Write a function called sumArray which accepts a single argument: an array of numbers.  
// It should return the sum of all the numbers in the array.

// sumArray([1,2,3]) // 6
// sumArray([2,2,2,2]) // 8
// sumArray([50,50,1]) // 101
// Hints:

// You'll need a variable to keep track of the total.  It should start out as zero.

// Loop over the array and for each element, add it to the total variable.

// After you have added every number to total, return total.


function sumArray(arr) {
    let total = 0;
    for (number of arr) {
        total += number
    }
    return total
}

// DEFINE YOUR FUNCTION BELOW:

function sumArray(arry) {
    let total = 0;
    for (let i = 0; i < arry.length; i++) {
        total += arry[i]
    }
    return total
}

sumArray([1,2,3])

// Write a function called returnDay. this function takes in one parameter (a number from 1-7) 
// and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 
// 1 or greater than 7, the function should return null. In some countries Sunday is treated as 
// the first day of the week, but for this exercise we will use Monday as the first day.

// // Hint: store the days of the week in an array, or use an object with numerical keys.  
// When the function is called, plug the number into the array/object you've created to 
// retrieve the corresponding day name and then return that value.

// returnDay(1) // "Monday"
// returnDay(7) // "Sunday"
// returnDay(4) // "Thursday"
// returnDay(0) // null

function returnDay(num) {
    let weekDays = ["Monday", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]
    if (num > 7 || num < 1) {
        return null
    } else {
        return weekDays[num-1]
    }
}
