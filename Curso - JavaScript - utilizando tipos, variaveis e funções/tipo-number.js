const num1 = 8;
const num2 = 2.6;
const num3 = -2;
const num4 = Number.parseInt('5');

const total = num1+num2+num3+num4;

console.log( total);

console.log(typeof('2'*num3))

const numero = 10;
const nome = 'Ana';

console.log(Number.isNaN(numero)); // false
console.log(Number.isNaN(nome));   // false
console.log(Number.isNaN(NaN));    // true
console.log(isNaN(10));            // false
console.log(isNaN(nome));          // true
console.log(isNaN(NaN));           // true