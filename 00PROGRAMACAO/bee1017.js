let num1, num2, soma;
num1 = parseInt(lines.shift());
num2 = parseInt(lines.shift());

soma = num1 * num2 / 12;
console.log(`${soma.toFixed(3)}`);
