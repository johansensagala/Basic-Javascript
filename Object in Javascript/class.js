// membuat sebuah class "Person"
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greeting() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
}
  
// membuat sebuah objek "person1" dari class "Person"
var person1 = new Person("John", 30);
  
// memanggil metode "greeting" pada objek "person1"
person1.greeting(); // output: "Hello, my name is John and I am 30 years old."
  