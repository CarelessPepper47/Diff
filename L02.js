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