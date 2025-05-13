const peso = 50;     
const altura = 1.60; 

const imc = peso / (altura * altura);

console.log("IMC:", imc.toFixed(2));

if (imc < 18.5) {
  console.log("Categoria: Baixo peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Categoria: Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Categoria: Sobrepeso");
} else {
  console.log("Categoria: Obesidade");
}