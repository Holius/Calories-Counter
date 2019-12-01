// const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

// const sliced = (string) => R.split('', string);
// const numArr = (array) => array.filter ( x => !isNaN(parseInt(x)));
// const length = (array) => R.length(array);
// const piped = (string) => {
//     const sliced = ((string) => R.split('', string))(string);
//     const numArr = ((array) => array.filter ( x => !isNaN(parseInt(x))))(sliced);
//     return length = ((array) => R.length(array))(numArr);
// }
// const numbersInString =  R.pipe(R.split(''), numArr, R.length());
// expect(numbersInString(sentence)).toBe(7); 

// console.log('If you see this printed in the console, the test passed!');
window.addEventListener("DOMContentLoaded", function() {

const dummy = [
    {Meal: 'breakfast', Calories: 600},
    {Meal: 'lunch', Calories: 400},
    {Meal: 'dinner', Calories: 200}
]

const addCalories = array => {
    return array.reduce( (acc, cv) => {
        return acc + cv.Calories;
    } , 0)
}

const addToPar = (child, parent) => {
    return parent.appendChild(child);
};

const createElm = (elm) => {
    return document.createElement(elm);
}

const createTextNode = (text) => {
    return document.createTextNode(text);
}

function addNewTextElm (elm, text, parent) {
    const element = createElm(elm);
    const newText = createTextNode (text);
    addToPar(newText, element);
    addToPar(element, parent);
}

const addNewElm = (elm, parent) => {
    const element = createElm(elm);
    addToPar(element, parent);
}

const addTD = addNewTextElm.bind(this, 'td');
const addTH = addNewTextElm.bind(this, 'th');

const generateTable = (parent, name) => {
      const table = createElm('table');
      table.id = name;
      addToPar(table, parent);
      addNewElm('thead', table);
      addNewElm('tbody', table);
      addNewElm('tfoot', table);
      return name
}

const generateTHead = (array, id) => {
    const thead = document.getElementById(id).childNodes[0];
    for (k in array[0]) {
        addTH(k, thead);
    }
}

const generateTBody = (array, id) => {
    const tbody = document.getElementById(id).childNodes[1];
    for (let i = 0; i < array.length; i++) {
        const row = createElm('tr');
        for (let k in array[i]) {
            addTD(array[i][k], row);
            addToPar(row, tbody)
        }
    }   
}

const generateTFoot = (array, id) => {
    const tfoot = document.getElementById(id).childNodes[2];
    const row = createElm('tr');
    addTD('total', row);
    addTD(addCalories(array), row);
    addToPar(row, tfoot);
}

function generateCalorieTable (parent, array, id) {
    generateTable(parent, id)
    generateTHead(array, id);
    generateTBody(array, id);
    generateTFoot(array, id);
}

const node = document.getElementById('app');
generateCalorieTable (node, dummy, 'calorieCounter')
console.log(document.getElementById('calorieCounter').childNodes)

}, false);