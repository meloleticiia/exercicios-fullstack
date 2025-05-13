const nota = 3;

if(nota >= 7 && nota <= 10 ) {
  console.log("Aprovado");
} else if (nota >= 4 && nota < 7) {
  console.log("Recuperação");
} else if (nota >= 0 && nota < 4) {
  console.log("Reprovado");
} else {
  console.log("Nota inválida");
}
