let rzeczy = [1, null, "pies", true, 19];

let tydzien = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]

let strings = ["a", "b", "dupa", "dupa", "c", "d", "dupa"]

let ilosc = {};

strings.forEach(item => {
    if (ilosc[item]) {
        ilosc[item]++
    } else {
        ilosc[item] = 1;
    }
})

console.log(ilosc)

let numerki = [1, 2, 3, 4, 5, 6]

let sum = 0;

numerki.forEach(item => {
    sum += item
})

console.log(sum)

let numerki2 = numerki.map(mnozenie)

function mnozenie(item) {
    return item * 2;
}

console.log(numerki)
console.log(numerki2)

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

console.log(uzytkownicy)

tydzien[10] = "jopjopjop";

tydzien.push("8smy dzien tygodnia");

console.log(tydzien);

tydzien.pop();

let zapisanyPop = tydzien.pop()

console.log(tydzien)
console.log(zapisanyPop)

let rozwalTydzien = tydzien.shift();

console.log(rozwalTydzien);

uzytkownicy.unshift({
    imie: "VIP",
    wiek: NaN,
    but: null,
    log: false
})


// Proste ćwiczenie

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:

planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");

let dniPracujace = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];
let dniWeekendowe = ["Sobota", "Niedziela"];

let pelnyTydzien = dniPracujace.concat(dniWeekendowe);

dniPracujace.reverse();

const tictactoe = [
    ["X", "X", 0],
    [0, null, "X"],
    [0, "X", "X"]
];

tictactoe[1][1];

// DO NOT TOUCH!!! (please)
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

// YOUR CODE GOES BELOW THIS LINE:

airplaneSeats[3][1] = 'Hugo'






