let porção = 20;
let preco;

if(porção >= 12) {
  preco = 0.25;
} else {
  preco = 0.30;
}

let total = porção * preco;

console.log("Quantidade de maçãs: " + porção);
console.log("Valor total da compra: R$ " + total.toFixed(2));



