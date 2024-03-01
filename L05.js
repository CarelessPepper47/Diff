for (let i = 1; i <= 10; i++) {
    console.log("dupa");
}

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Print out "Da ba dee da ba daa" 6 times, using a for loop

// for (let i = 1; i <= 6; i++) {
//     console.log("Da ba dee da ba daa");
// }

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

for (let i = 2; i <= 50; i *= 2) {
    console.log(i)
}

let tydzien = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]

for (let i = 0; i < tydzien.length; i++) {
    console.log(i, tydzien[i])
}

for (let i = tydzien.length-1; i >= 0; i--) {
    console.log(i, tydzien[i])
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; 

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase())
}

let przyklad = "Z dupy";

for (i = 0; i <= 5; i++) {
    console.log("Outer: Gówno", i);
    for (j = 0; j < przyklad.length; j++) {
        console.log("Inner:", przyklad[j])
    }
}

let psz = "psz";

for (i = 1; i < 6; i += 2) {
    console.log(i, psz.toUpperCase())
    for (j = i/2; j < 3 ; j++) {
        console.log(j, "dum")
    }
}

let seatingCharts = [
    ["Olek", "Alek", "Bolek"],
    ["Ogla", "Googla", "That's Rojo Caliente", "Łogoła"],
    ["Le", "Isla", "Bonita"]
]

for (i = 0; i < seatingCharts.length; i++) {
    const row = seatingCharts[i];
    console.log(`Row ${i+1}`)
    for (j = 0; j < row.length; j++) {
        console.log(`       ${row[j]}`)
    }
}