//console.log menampilkan format multiline

const testParagraph = () => {
    return `This is line 1
This is line 2
This is line 3`; //direct return
}

console.log(testParagraph());

//dom memerlukan tag html untuk menampilkan multiline

const testParagraphInDOM = () => {
    return `This is line 1<br>
This is line 2<br>
This is line 3`;
}

document.querySelector('div').innerHTML = testParagraphInDOM();