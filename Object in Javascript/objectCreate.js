// membuat sebuah objek "personPrototype" yang akan digunakan sebagai prototype untuk objek baru yang akan dibuat
var personPrototype = {
    greeting: function() {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};
  
// membuat sebuah objek "person1" yang dibuat dengan menggunakan objek "personPrototype" sebagai prototype

// var person1 = Object.create(personPrototype);
// person1.name = "John";
// person1.age = 30;

var person1 = Object.create(personPrototype, {
    name: { value: "John" },
    age: { value: 30 }
});
  
// memanggil metode "greeting" pada objek "person1"
person1.greeting(); // output: "Hello, my name is John and I am 30 years old."