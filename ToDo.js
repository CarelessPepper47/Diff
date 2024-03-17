let toDoList = [];

let dziala = false;

function startApp() {

    let poczatek = prompt(`This is your ToDoApp \nWhat would you like to do? \n"new" \n"list" \n"delete" \n"quit"`)

    let usun;

    while (poczatek !== "quit" && poczatek !== "q") {
        if (poczatek === "new") {
            let newToDo = prompt("Make a new To Do")
            toDoList.push(newToDo)
            console.log(`Dodano do listy ${newToDo}`)
            let toDoThing = document.createElement("p");
            toDoThing.innerText = `- ${newToDo}`
            document.getElementById("lista").append(toDoThing)
        } else if (poczatek === "list") {
            for (let rzecz of toDoList) {
                console.log(`${toDoList.indexOf(rzecz) + 1}. ${rzecz}`)
            }
        } else if (poczatek === "delete") {
            usun = parseInt(prompt(`What to delete?`))
            if (usun >= 1 && usun <= toDoList.length) {
                console.log(`You deleted ${toDoList[usun-1]}`)
                toDoList.splice(usun - 1, 1)
            } else {
                console.log("Invalid choice!");
            }
            
        } else {
            poczatek = prompt(`You must type a valid command.\n"new" \n"list" \n"delete" \n"quit"`)
        }
        poczatek = prompt(`This is your ToDoApp \nWhat would you like to do? \n"new" \n"list" \n"delete" \n"quit"`)
    }
    console.log("You left ToDoApp!")
}

// Bootcamp Solution ----------------------------------------------------------------------------------------------------------------------

function BootCampApp() {

    let input = prompt("What would you like to do?")

    const todos = ['Collect Chicken Eggs', "Clean Litter Box"]

    while(input !== "quit" && input !== "q") {
        if (input === "list") {
            console.log("-----------------")
            for (let i = 0; i < todos.length; i++) {
                console.log(`${i}: ${todos[i]}`)
            }
            console.log("-----------------")
        } else if (input === "new") {
            const niuToDo = prompt("Ok, what is the new todo?")
            todos.push(niuToDo)
            console.log(`${niuToDo} added to the list.`)
        } else if (input === "delete") {
            const index = parseInt(prompt("Okay, what do you want to delete?"))
            if (!Number.isNaN(index)) {
                const deleted = todos.splice(index, 1)
                console.log(`Ok, deleted ${deleted[0]}`)
            } else {
                console.log("Unknown index")
            }
        }
        input = prompt("What would you like to do?")
    }
    console.log("OK QUIT THE APP!")
}