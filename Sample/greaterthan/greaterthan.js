function greaterThan(arr, num) {
    var jumlah = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > num){
            jumlah++;
        }
    }

    return jumlah;
}

var arrayAngka = prompt('Masukkan angka-angka dalam bentuk array!');
var angkaUtama = parseInt(prompt('Masukkan bilangan pokoknya'));
alert('Terdapat ' + greaterThan(arrayAngka, angkaUtama) + ' bilangan yang lebih besar dari ' + angkaUtama);