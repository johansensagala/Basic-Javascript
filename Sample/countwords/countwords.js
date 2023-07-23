function HitungKata(word) {
    var a = 0;
    for(var i = 0; i <= word.length; i++){
        if(word[i] == ' '){
            a++;
        } 
    }
    a++;

    return a;
}

var Inputan = prompt('Masukkan kalimat yang ingin dihitung jumlah katanya!')
alert('Jumlah kata: ' + HitungKata(Inputan));