function tampilkanBiodata(nama, umur, ...lainnya) {
    console.log(`Nama: ${nama}`);
    console.log(`Umur: ${umur}`);
    console.log(`Lainnya: ${lainnya.join(", ")}`);
}
  
tampilkanBiodata("Johansen Sagala", 21, "Pria", "Mahasiswa", "Hobi: Sepeda");