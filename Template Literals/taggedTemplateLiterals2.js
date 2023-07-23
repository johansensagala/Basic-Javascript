function myTag(strings) {
    const str0 = strings[0];
  
    const [str1, str2] = str0.split(' yang '); // Destructuring Assignment
  
    const middleStr = 'sangat pintar';
    
    const result = `${str1} yang ${middleStr} ${str2}`;
  
    return result;
}
  
const message = myTag`aku adalah anak yang sangat cerdas`;
console.log(message); // output: aku adalah anak yang sangat pintar sangat cerdas