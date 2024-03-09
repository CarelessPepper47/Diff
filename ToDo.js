let toDoList = [];

let dziala = false;

function startApp() {

    let poczatek = prompt(`This is your ToDoApp \nWhat would you like to do? \n"new" \n"list" \n"delete" \n"quit"`)

    dziala = true;

    let usun;

    while (dziala) {
        if (poczatek === "new") {
            let newToDo = prompt("Make a new To Do")
            toDoList.push(newToDo)
            console.log(`Dodano do listy ${newToDo}`)
            poczatek = prompt(`This is your ToDoApp \nWhat would you like to do? \n"new" \n"list" \n"delete" \n"quit"`)
        } else if (poczatek === "list") {
            for (let rzecz of toDoList) {
                console.log(`${toDoList.indexOf(rzecz) + 1}. ${rzecz}`)
            }
            poczatek = prompt(`This is your ToDoApp \nWhat would you like to do? \n"new" \n"list" \n"delete" \n"quit"`)
        } else if (poczatek === "delete") {
            usun = parseInt(prompt(`What to delete?`))
            if (usun >= 1 && usun <= toDoList.length) {
                console.log(`You deleted ${toDoList[usun-1]}`)
                toDoList.splice(usun - 1, 1)
                poczatek = prompt(`This is your ToDoApp \nWhat would you like to do? \n"new" \n"list" \n"delete" \n"quit"`)
            } else {
                console.log("Invalid choice!");
                poczatek = prompt(`This is your ToDoApp \nWhat would you like to do? \n"new" \n"list" \n"delete" \n"quit"`)
            }
            
        } else if (poczatek === "quit") {
            console.log(`You left ToDoApp!`)
            break;
        } else {
            poczatek = prompt(`You must type a valid command. \n"quit" to quit an app`)
        }
    }
}