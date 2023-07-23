// for of digunakan untuk array

let angka = [1, 2, 3, 4, 5];
let total = 0;

for (let i of angka) {
    total += i;
}

console.log(total);

//for in digunakan untuk objek

let bilangan = {
    angka1: 1,
    angka2: 2,
    angka3: 3,
    angka4: 4,
    angka5: 5
}
let sum = 0;

for (let j in bilangan) {
    sum += bilangan[j];
}

console.log(sum);