// const numbers = [2,3,4,5,6,6];
// const output = [];

// for(let i = 0 ; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);

const numbers = [1,3,4,5,6,7];

const result = numbers.map(element => element * element);
console.log(result);

const output = numbers.map(function(element){
    return element *  element;
})
console.log(output );

const big = numbers.find(x => x > 5);
console.log(big);

const student = [23,43,55,6,67,7];
const op = student.filter(x => x > 10);
console.log(op);