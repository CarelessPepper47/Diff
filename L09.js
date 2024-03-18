function rollYourDie(numSides) {
    if (numSides === undefined) {
        numSides = 6
    }
    return Math.floor(Math.random() * numSides) + 1
}

function rollYourDie1(numSides = 6) { // the default of numSides = 6
    return Math.floor(Math.random() * numSides) + 1 // The same as above
}

function greet(person, msg = "Spierpapier") {
    console.log(`${msg}, ${person}`)
}

Math.max(13, 4, 5, 21, 29, 34, 99, 108) // 108 - its the biggest value
Math.min(13, 4, 5, 21, 29, 34, 99, 108) // 4 - its the lowest value

const nums = [13, 4, 5, 21, 29, 34, 99, 108]

Math.max(nums) // NaN
Math.max(...nums) // 108 - (...)spreads the array into seperate arguments, and now 108 is again the biggest

console.log(nums) // [13, 4, 5, 21, 29, 34, 99, 108] ARRAY
console.log(...nums) // 13 4 5 21 29 34 99 108 - a separate arguments

console.log("Hello") // Hello
console.log(..."Hello") // H e l l o


const cats = ["Blue", "Scout", "Rocket"]
const dogs = ["Wyatt", "Siko", "Rusty"]

const hello = [..."Hello"] // ["H", "e", "l", "l", "o"]

const allPets = [...cats, ...dogs, "Mały Kot"] // ["Blue", "Scout", "Rocket", "Wyatt", "Siko", "Rusty", "Mały Kot"]



// SPREAD IN OBJECTS
const feline = { legs: 4, family: "Felidae" }
const canine = { family: "Caninae", furry: true }

const dog = {...canine, isPet: true }
const lion = {...feline, isPet: false }

const catDog = { ...feline, ...canine} // { legs: 4, family: "Caninae", furry: true } // "Caninae" won because it overrides