var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num1, soma;
num1 = parseInt(lines.shift());

soma = num1 * 2;
console.log(`${soma} minutos`);
