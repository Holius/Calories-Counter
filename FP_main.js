const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

const sliced = (string) => R.split('', string);
const numArr = (array) => array.filter ( x => !isNaN(parseInt(x)));
const length = (array) => R.length(array);
const piped = (string) => {
    const sliced = ((string) => R.split('', string))(string);
    const numArr = ((array) => array.filter ( x => !isNaN(parseInt(x))))(sliced);
    return length = ((array) => R.length(array))(numArr);
}
const numbersInString =  R.pipe(R.split(''), numArr, R.length());
expect(numbersInString(sentence)).toBe(7); 

console.log('If you see this printed in the console, the test passed!');