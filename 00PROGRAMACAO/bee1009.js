var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome ;
let num1, num2, num3, soma;
num1 = parseFloat(lines.shift());
num2 = parseFloat(lines.shift());
num3 = parseFloat(lines.shift());

soma = (num2 * num3) + num1;
console.log(`TOTAL = R$ ${soma.toFixed(2) }`);
