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