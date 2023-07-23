function totalVolume(vol1, vol2){
    var total = vol1**3 + vol2**3;

    return total;
}

var a = prompt('Masukkan panjang sisi kubus pertama!');
var b = prompt('Masukkan panjang sisi kubus kedua!');
alert('Total luas kubus adalah ' + totalVolume(a, b));