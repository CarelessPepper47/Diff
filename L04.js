
// Your code goes in here:
const product = {
    name: "Gummy Bears",
    inStock: true,
    price: 1.99,
    flavors: ["grape", "apple", "cherry"]
}

let uzytkownicy = [
    {imie: "Morel",
    wiek: 26,
    but: 40,
    log: true},

    {imie: "Olek",
    wiek: 30,
    but: 35,
    log: true},

    {imie: "Kubeb",
    wiek: 17,
    but: 39,
    log: false}
]

uzytkownicy.push({
    imie: "Nataniel",
    wiek: 77,
    but: 44,
    log: false
})

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:

let fullAddress1 = `${restaurant.address}, ${restaurant.city}, state: ${restaurant.state} with zipcode ${restaurant.zipcode}`

let fullAddress2 = `${restaurant["address"]}, ${restaurant["city"]}, ${restaurant["state"]}, ${restaurant["zipcode"]}`

const midterms = {
    Adam: 98,
    Lol: 86,
    Git: 69,
    Goge: 24
}

midterms.Git = 55;

midterms.NowyTyp = 12;

const mateuszek = {
    imie: "Mateusz",
    nazwisko: "Raszeja",
    styl: ["HTML", "Tailwindcss", "JS", "React"],
    proporcje: {
        wzrost: 184,
        waga: 75,
        stopa: 45
    }
}

