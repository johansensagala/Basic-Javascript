// function uniqueNumber() {
//     var unique = [];
//     for (var i = 0; i < arguments.length; i++) {
//         if (!unique.includes(arguments[i])) {
//             unique.push(arguments[i]);
//         }
//     }
//     return unique;
// }

// var arr = [];
// while(true) {
//     var a = parseInt(prompt('Masukkan angka yang anda mau (ketik 0 untuk selesai):'));
//     if(a === 0) break;
//     arr.push(a);
// }
// alert('Angka uniknya adalah: ' + uniqueNumber(...arr));

function getUniqueNumbers(numbers) {
    return numbers.filter(function(number, index) {
        return numbers.indexOf(number) === index;
    });
}

var numbers = [1, 2, 3, 3, 4, 5, 5];
var uniqueNumbers = getUniqueNumbers(numbers);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
