function findLargestNumber() {
    var largest = -Infinity;

    for(var i = 0; i < arguments.length; i++){
        if(arguments[i] > largest){
            largest = arguments[i];
        }
    }

    return largest;
}

console.log(findLargestNumber(1, 5, 2, 8, 4)) // 8
console.log(findLargestNumber(-3, -1, -5, -2)) // -1
console.log(findLargestNumber(2, 3, 4, 5, 6)) // 6
