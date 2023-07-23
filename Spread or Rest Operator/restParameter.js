function tambah(...angka) {
    let hasil = 0;
    
    for (let i = 0; i < angka.length; i++) {
        hasil += angka[i];
    }

    return hasil;
}
  
console.log(tambah(1, 2, 3, 4, 5)); // Output: 15
console.log(tambah(10, 20, 30)); // Output: 60
console.log(tambah(0, 1)); // Output: 1