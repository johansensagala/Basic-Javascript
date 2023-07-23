const siswa1 = ['Iman', 'Irpan', 'Jonatan'];
const siswa2 = ['Eli', 'Josua', 'Perianto'];

// const siswa = siswa1.concat(siswa2);

// siswa.splice(siswa.indexOf('Jonatan') + 1, 0, 'Kiel'); // menggunakan built-in-method splice

const siswa = [...siswa1, 'Kiel', ...siswa2]; // menggunakan rest operator

console.log(siswa);