let n = 8;
let fibonacci = [1, 1];

for (let i = 2; i < n; i++) {
  let novoNumero = fibonacci[i - 1] + fibonacci[i - 2];
  fibonacci.push(novoNumero);

}

console.log(fibonacci);