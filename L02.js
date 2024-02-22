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
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
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