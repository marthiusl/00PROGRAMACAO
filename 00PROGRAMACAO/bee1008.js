var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num1, num2, num3, soma;
num1 = parseInt(lines.shift());
num2 = parseInt(lines.shift());
num3 = parseFloat(lines.shift());

soma = num2 * num3;
console.log(`NUMBER = ${num1}`);
console.log(`SALARY = U$ ${soma.toFixed(2) }`);