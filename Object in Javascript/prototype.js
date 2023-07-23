// membuat sebuah konstruktor untuk objek "Person"
function Person(name, age) {
    this.name = name;
    this.age = age;
}
  
// menambahkan metode "greet" ke prototype objek "Person"
Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};
  
// membuat objek "person1" dari konstruktor "Person"
var person1 = new Person("John", 30);
var person2 = new Person("Jane", 25);
  
// memanggil metode "greet" pada objek "person1"
person1.greet(); // output: "Hello, my name is John and I am 30 years old."
person2.greet();