const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(number => number % 2 === 0); // [2, 4, 6, 8, 10]

const squaredNumbers = filteredNumbers.map(number => number * number); // [4, 16, 36, 64, 100]

const sumOfSquaredNumbers = squaredNumbers.reduce((accumulator, currentValue) => accumulator + currentValue); // 4 + 16 + 36 + 64 + 100

console.log(sumOfSquaredNumbers); // Output: 220