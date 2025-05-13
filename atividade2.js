const idade = 18;

if (idade >= 0 && idade <= 13) {
  console.log("O indivíduo é uma criança");
} else {
  if (idade >= 14 && idade <= 17) {
    console.log("O indivíduo é um adolescente");
  } else {
    if (idade >= 18 && idade <= 60) {
      console.log("O indivíduo é um adulto");
    } else {
      if (idade >= 61) {
        console.log("O indivíduo é um idoso");
      } else {
        console.log("Idade inválida");
      }
    }
  }
}
