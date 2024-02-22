let dom = "MateuszOlga";

console.log(dom.slice(7));

console.log(dom.replace("Mateusz", "Mały Kot"))

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

let facialHair = word.slice(5).replace("o", "e")

console.log(facialHair)

let price = 3.99;

let quantity = prompt("Enter the quantity", "3");

if (quantity == !Number) {
    alert("That's not a number")
} else {
    alert(`You need to pay ${quantity * price}!`)
}

let numerekRandomek = Math.floor(Math.random() * 10) + 1;

if (numerekRandomek == !Number) {
    alert("That's not a number")
} else {
    alert(`You need to pay ${numerekRandomek * price}!`)
}

let specyficznyNumerek = Math.floor(Math.random() * 4) + 50; // Losuje numerek of 50 do 54

let die1 = Math.floor(Math.random() * 6) +1;
let die2 = Math.floor(Math.random() * 6) +1;

let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1+die2}`
