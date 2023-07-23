const name = 'Johansen Sagala';
const age = 21;

function myTag(strings, nameValue, ageValue) {
    const str0 = strings[0];
    const str1 = strings[1];

    const nameStr = nameValue.toUpperCase();
    const ageStr = ageValue > 30 ? 'old' : 'young'; // ternary operator

    return `${str0}${nameStr}${str1}${ageStr}`;
}

const message = myTag`Hello, my name is ${name} and I am ${age} years ${''}`;

console.log(message);