function getUserData({name, age, address: {city, country}, skills: [primarySkill, secondarySkill]}) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`City: ${city}`);
    console.log(`Country: ${country}`);
    console.log(`Primary Skill: ${primarySkill}`);
    console.log(`Secondary Skill: ${secondarySkill}`);
}
  
const user = {
    name: 'Irpan Buri Siburian',
    age: 22,
    address: {
        city: 'Medan',
        country: 'Indonesia'
    },
    skills: ['JavaScript', 'HTML', 'CSS']
};
  
getUserData(user);