// Synchronous Callback

function doSomething(callback) {
    console.log("Melakukan sesuatu");
    callback();
}
    
function doSomethingElse() {
    console.log("Melakukan sesuatu yang lain");
}
  
doSomething(doSomethingElse);

// Asynchronous Callback

function fetchData(callback) {
    setTimeout(function() {
        console.log("Mendapatkan data");
        callback();
    }, 2000);
}
  
function displayData() {
    console.log("Menampilkan data");
}
  
fetchData(displayData);