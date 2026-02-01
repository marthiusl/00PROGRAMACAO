var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num1, num2, num3; 
num1 = parseInt(lines.shift());
num2 = parseInt(lines.shift());
num3 = parseFloat(lines.shift());

let num4, num5, num6;
num4 = parseInt(lines.shift());
num5 = parseInt(lines.shift());
num6 = parseFloat(lines.shift());

prod = num2*num3 + num5*num6;
console.log(`VALOR A PAGAR: R$ ${prod.toFixed(2) }`);