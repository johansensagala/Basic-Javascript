function reverseString(str) {
    if (str === "") {
      return "";
    } else {
      return reverseString(str.substr(1)) + str.charAt(0);
    }
  }
  console.log(reverseString("hello")); // "olleh"

// let a = "Hello";
// let b = a.substring(1, 6);

// console.log(b);

// let str = "Hello World";
// console.log(str.substr(1)); // "Hello"
// console.log(str.substring(3, 8)); // "Hello"