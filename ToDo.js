let toDoList = [];

let dziala = false;

function startApp() {

    let poczatek = prompt(`This is your ToDoApp \nWhat would you like to do? \n"new" \n"list" \n"delete" \n"quit"`)

    dziala = true;

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
            
        }
    }
}