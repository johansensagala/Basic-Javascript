const person = {
    name: 'Johansen Sagala',
    age: 21,
    address: {
        city: 'Bandung',
        country: 'Indonesia'
    }
};
  
const {name, age, address: {city, country}} = person;
  
console.log(name); // 'Johansen Sagala'
console.log(age); // 21
console.log(city); // 'Bandung'
console.log(country); // 'Indonesia'