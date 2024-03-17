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
        score: 88,
        year: 1986
    },
    {
        title: "Amadeus",
        score: 90,
        year: 1984
    },
    {
        title: "Parasite",
        score: 95,
        year: 2018
    },
    {
        title: "Mandariniid",
        score: 99,
        year: 2010
    },
    {
        title: "LOTR",
        score: 100,
        year: 2001
    },
    {
        title: "Sharknado",
        score: 44,
        year: 2013
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

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// Write an arrow function expression called greet.  
// It should accept a single string argument, representing a person's name.  It should return a greeting string as shown below:

// greet("Hagrid") //"Hey Hagrid!" 
// greet("Luna") //"Hey Luna!"
// Be sure to use arrow function syntax!

const greet = (name) => {
    return console.log(`Hey ${name}!`)
}


// evolution of making functions shorter

const isEven0 = function (num) { // regular function expression
    return num % 2 === 0;
}
const isEven1 = (num) => { // arrow function with parens around parameters
    return num % 2 === 0;
}
const isEven2 = num => { // no parens around parameter
    return num % 2 === 0;
}
const isEven3 = num => ( // implicit return
    num % 2 === 0
);
const isEven4 = num => num % 2 === 0; // one-liner implicit return

const rollDie1 = () => (
    Math.floor(Math.random() * 6) + 1
)

const rollDie2 = () => Math.floor(Math.random() * 6) + 1

const scoreByTen = movies.map(function(movie) {
    return movie.score/10
})

const scoreByFive = movies.map((movie) => movie.score/5) 

setTimeout(() => console.log("Minęło 5 sekund."), 5000)

const interwal = setInterval(() => console.log(Math.floor(Math.random() * 10)), 5000)
// to stop the interval just call clearInterval(interwal)

const odds = numbers.filter(num => num % 2 !== 0)
const oddsTrueFalse = numbers.map(num => num % 2 !== 0)

const newMovies = movies.filter(m => m.year > 2000)
const goodNewMovies = newMovies.filter(m => m.score > 90)

const newGoodMoviesInaczej = movies.filter(m => m.year > 2000).map(m => m.score > 90)

// Let's get some practice using the filter method. Write a function called validUserNames 
// that accepts an array of usernames (strings).  It should return a new array, containing only the 
// usernames that are less than 10 characters. For example:

// validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// // => ["mark", "carrie98", "MoanaFan"]


// Note: The syntax for this solution might be a little strange to you at this point in the course 
// because it requires you to write the code, that you just learned in the previous lecture, inside of a function. e.g.,

// function validUserNames(usernames) {
//   // your code here
// }


// or if you want to get fancy with an arrow function:

// const validUserNames = usernames => // your code here;


// There is no need to define an actual array of usernames, that part is done for you behind the scenes.

const usernames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']
const validUserNames2 = usernames.filter(names => names.length < 10)

// BOOTCAMP SOLUTION
const validUserNames = usernames => usernames.filter(username => username.length < 10)

usernames.every(word => {
    return word.length === 3;
})

const isSomeM = usernames.some(word => word[0] === "m") // true // "mark", "MoanaFan"
const isEveryM = usernames.every(word => word[0] === "m") // false // not every username starts with "m"

// Define a function called allEvens that accepts a single array of numbers.  
// If the array contains all even numbers, return true.  Otherwise, return false.  
// Use some or every to help you do this!  (only one of them is actually useful here)

// allEvens([2,4,6,8]) //true
// allEvens([1,4,6,8]) //false
// allEvens([1,2,3]) //false

function allEvens(array) {
    if (array.every(num => num % 2 === 0)) {
        return true
    } else {
        return false
    }
}

// BOOTCAMP SOLUTION 

function allEvens2(array) {
    let newArray = array.every(num => num % 2 === 0);
    return newArray;
};

const dupa = [3, 5, 7, 9, 11]

const reducedDupa = dupa.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

let prices = [9,99, 1.50, 3.50, 49.99]

let listaZakupow = prices.reduce((total, rzeczZlisty) => {
    return total+rzeczZlisty
})

prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min
})

const bestMovie = movies.reduce((highest, currMovie) => {
    if (currMovie.score > highest.score) {
        return currMovie
    }
    return highest
})

const withoutIndexZero = dupa.reduce((sum, num) => sum+num, 100) // the same as below, but with additional 100
const withIndexZero = dupa.reduce((sum, num) => sum+num)

const viggo1 = {
    firstName: "Viggo",
    lastName: "Mortensen",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

const viggo2 = {
    firstName: "Viggo",
    lastName: "Mortensen",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function() {
        setTimeout(() => {
            console.log(this.fullName()) // Arrow Function ignores window object and refers to the closest object which is viggo2
        }, 3000)
    }
}

