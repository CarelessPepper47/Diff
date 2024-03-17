const numbers = [1, 2, 3, 4, 5, 6, 7]

function print(element) {
    console.log(element)
}

print(numbers[0]) // 1
print(numbers[1]) // 2
print(numbers[2]) // 3

numbers.forEach(print) // will print out every number in numbers

numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(`${el} jest podzielne przez 2`)
    } else {
    console.log(el) // ITS THE SAME as the above
}
})

for (let el of numbers) {
    console.log(el) // ITS THE SAME as above
}

const movies = [
    {
        title: "Aliens",
        score: 88
    },
    {
        title: "Amadeus",
        score: 90
    },
    {
        title: "Parasite",
        score: 95
    },
    {
        title: "Mandariniid",
        score: 99
    }
]

movies.forEach(function(movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})

const x2 = numbers.map(function (double) {
    return double*2 // [2, 4, 6, 8, 10, 12, 14]
})

const movieTitles = movies.map(function (titles) {
    return titles.title.toUpperCase()
})

// It's time to get practice with the map method!

// Define a variable named firstNames and assign it to the result of mapping over the existing array, 
// fullNames, so that firstNames contains only the first names of the Harry Potter characters from the fullNames array.
// e.g.,

// console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']


// Please note:
// The fullNames array is an array of objects with each object containing properties for the first and last names of each character. 
// You may need to click the "Reset code" link if you do not see the fullNames array pre-loaded into the exercise's index.js file.

// This exercise has been updated, you may see Q&A threads from this lecture that relate to the 
// original exercise which no longer exists. They can be ignored.

let fullNames = [
    {
        name: "Albus",
        surname: "Dumbledore"
    },
    {
        name: "Harry",
        surname: "Potter"
    },
    {
        name: "Severus",
        surname: "Snape"
    },
]

// DO NOT ALTER THE FOLLOWING CODE:
// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, 
// {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, 
// {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here

// const firstNames = fullNames.map(function(imie) {
//     return imie.first
// })

// console.log(firstNames)

let firstNames = fullNames.map(function (name) {
    return name.name
})

let initials = fullNames.map(function (initial) {
    return initial.name[0].toUpperCase() + initial.surname[0].toUpperCase()
})

const rollDie = () => {
    return Math.floor(Math.random * 6) + 1;
}

// Write an arrow function expression called greet.  
// It should accept a single string argument, representing a person's name.  It should return a greeting string as shown below:

// greet("Hagrid") //"Hey Hagrid!" 
// greet("Luna") //"Hey Luna!"
// Be sure to use arrow function syntax!

const greet = (name) => {
    return console.log(`Hey ${name}!`)
}