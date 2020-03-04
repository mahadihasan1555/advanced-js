const numbers = [2, 3, 33, 5];

// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers [i];
//     const result = element * element;
//     output.push(result);
// }


// function square (element){
//     return element * element;
// }

// numbers.map(function (element , any[];)
// console.log(output);

const bigger = numbers.filter( x => x < 5);
console.log(bigger);

const isThere = numbers.find(x => x >5);
console.log(isThere);

