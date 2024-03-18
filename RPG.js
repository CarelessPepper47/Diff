
let weaponItems = [
    {sword: {
        damage: 5,
        range: 1,
        actionUse: 2
    }},
    {dagger: {
        damage: 3,
        range: 1,
        actionUse: 1
    }},
    {bow: {
        damage: 4,
        range: 3,
        actionUse: 2
    }}
]

let classes = [
    {
    name: "Warrior", 
    weapon: weaponItems[0],
    health: 150,
    backpack: [],
    actions: 5
    },

    {
    name: "Rogue",
    weapon: weaponItems[1],
    health: 100,
    backpack: ["key", weaponItems[2]],
    actions: 7
    }
]

let classDiv;

function start() {
    let playerName = prompt("Enter your name:");
    document.getElementById("info").classList.remove("hidden")
    document.getElementById("stats").classList.remove("hidden")
    document.getElementById("name").innerText = playerName;
    document.getElementById("start").classList.add("hidden");
    let uiSelection = document.getElementById("ui")
    for (let i = 0; i < classes.length; i++) {
        classDiv = document.createElement("button");
        classDiv.textContent = classes[i].name;
        if (classDiv.textContent === "Warrior") {
            // classDiv.classList.add("warrior")
            classDiv.classList.add("bg-warrior")
        } else if (classDiv.textContent === "Rogue") {
            // classDiv.classList.add("rogue")
            // classDiv.classList.add("bg-rogue")
            classDiv.classList.add("bg-red-500")

        } else {
        break;
        }
        classDiv.classList.add("rounded-full")
        uiSelection.appendChild(classDiv);
    }
    // chooseClass()
}



// function chooseClass() {
//     let classChoice = document.createElement("div")
//     classChoice.classList.add("bg-black")
//     classChoice.classList.add("w-1/2")
//     classChoice.classList.add("h-screen")
//     classChoice.innerText = "dupa"
//     let num = classes.length
//     // showClasses(classChoice, num)
//     document.getElementById("ui").append(classChoice)
// }

// function showClasses(classChoice, num) {

// }