let password = prompt("Enter Password");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("SUPER!")
    } else {
        console.log("Hasło musi być bez spacji")
    }
} else {
    console.log("Za krótkiego masz hasło")
}

// dodatkowe 

let dzienTygodnia = prompt("Podaj dzień tygodnia", "Poniedziałek")

if (dzienTygodnia === "Poniedziałek") {
    console.log("Bruh")
} else if (dzienTygodnia === "Sobota" && "Niedziela") {
    console.log("To w sumie nawet lepiej")
} else if (dzienTygodnia !== "Piątek") {
    console.log("Długo jeszcze?")
} else {
    console.log("Jeszcze tylko troszke")
}

function getColor(phrase){
    if (phrase === "stop") {
        console.log("red");
    }
    else if (phrase === "slow") {
        console.log("yellow");
    }
    else if (phrase === "go") {
        console.log("green");
    }
    else {
        console.log("purple");
    }
}

// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
if(num <= 100) {
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
}

if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Super!") 
}  else {
        console.log("Słabiutko.")
}

const mystery = 'Pooooo7'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// LEAVE THIS CODE ALONE! (pretty please)
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}

let wiek = parseInt(prompt("Podaj wiek"));

if (wiek >= 0 && wiek < 5 || wiek >= 65) {
    console.log("Free!")
} else if (wiek < 0 ) {
    alert("Bez jajków")
} else if (wiek < 65 && wiek > 10) {
    console.log("450$")
} else if (wiek <= 10) {
    console.log("Wskakuj")
}

let firstName = prompt("Podaj imie");

if (!firstName) {
    firstName = prompt("Musisz podać imie")
}

let day = parseInt(prompt("Podaj liczbe"));

if (day === "1") {
    console.log("monday")
}
 else if (day === "2") {
    console.log("tuesday")
}
 else if (day === "3") {
    console.log("wednesday")
}
 else if (day === "4") {
    console.log("thursday")
}
 else if (day === "5") {
    console.log("friday")
}
 else if (day === "6") {
    console.log("saturday")
}
 else if (day === "7") {
    console.log("sunday")
}

switch(day) {
    case 1: 
    console.log("monday")
    break;
    case 2: 
    console.log("tuesday")
    break;
    case 3: 
    console.log("wednesday")
    break;
    case 4: 
    console.log("thursday")
    break;
    case 5: 
    console.log("friday")
    break;
    case 6: 
    console.log("saturday")
    break;
    case 7: 
    console.log("sunday")
    break;
    default:
        console.log("cos kurde sciemniasz")
}
