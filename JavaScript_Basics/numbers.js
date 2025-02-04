console.log(1 + 1); // : 2

console.log(5.7 - 1); // Subtraction: 4.7

console.log(3 * 4); // Multiplication: 48

console.log(12 / 5); // Division:2.26666

console.log(11 % 7); // Modulo: 4: remainder: 1r4

console.log(2 ** 3); // Exponentiation: 8

// Combined operations

// Order of operations: Parenthesis->

console.log(3 + 2 * 4); // Multiplication -> Addition

console.log((3 + 2) * 4); // Parenthesis(Addition) -> Multiplication

// parenthesis, multiplication, division, addition, subtraction
console.log(1 + 1 - (((5.7 * 4) / 2) % 6 ** 3));

// MODULO
console.log(22 % 5); //4r2
console.log(23 % 5); //4r3
console.log(24 % 5); //4r4
console.log(25 % 5); //5r0
console.log(26 % 5); //5r1
console.log(7 % 10); //0r7
console.log(4 / 2); // 0
console.log(4 % 2); // 2r0

// 4 / 2 = 2
console.log(4 / 2);
//With a remainder of 0
console.log(4 % 2);

// 7 / 2 = 3.5
console.log(7 / 2);
//With a remainder of 1
console.log(7 % 2);

// If a number modulus other number is equal to 0
// it is a multiple of "other number"

// 8 is indeed a multiple of 2!
console.log(8 % 2 === 0);
// 9 is NOT a multiple of 2!
console.log(9 % 2 === 0);

// Numbers
// Integers
const age = 34;

// Floating point numbers
const price = 12.99;

// NaN

const name = "Messi";

const howManyGoals = name / 2;

console.log(howManyGoals); // NaN: Not a Number
