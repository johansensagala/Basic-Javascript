try {
    let x = y + 1; // y belum didefinisikan
} catch (error) {
    console.log("Terjadi kesalahan: " + error.message);
} finally {
    console.log("Program selesai");
}