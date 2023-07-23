var main = true;

while (main === true){
    var kesempatan = 3;
    var bot = Math.ceil((Math.random()*10));

    while (kesempatan > 0){
        var player = prompt("Masukkan angka dari 1-10!");

        if(player === null){
            alert('Terima kasih telah bermain.');
            break;
        }
        else{
            if(player == bot){
                confirm('Jawaban anda benar. Angka yang benar adalah ' + bot + '. \nMau main lagi?');
                if(confirm() === false){
                    alert('Terima kasih telah bermain!')
                    break;
                }
                else{
                    kesempatan = 3;
                }
            }
            else if(player < bot){
                alert('Jawaban anda belum tepat. Angka terlalu kecil. Anda memiliki ' + (kesempatan-1) + ' kesempatan tersisa');
                kesempatan--;
            }
            else if(player > bot){
                alert('Jawaban anda belum tepat. Angka terlalu besar. Anda memiliki ' + (kesempatan-1) + ' kesempatan tersisa');
                kesempatan--;
            } 
            else{
                alert('Masukkan angka yang benar!');
            }
        }
    }
    
    if(player === null) {
        break;
    }
    else{
        main = confirm('Kesempatan anda telah habis. Jawaban yang benar adalah ' + bot + '\n Mau coba lagi?');
    }
    
}

if(player === null) {
    alert('Sampai jumpa.');
}
else{
    alert('Terima kasih telah bermain.');
}