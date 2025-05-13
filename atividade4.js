const opcao = 3

switch(opcao) {
  case 1:
    console.log("Bem vindo");
    break;
  case 2:
    console.log("Que dia é hoje?");
    break;
  case 3:
    console.log("Data atual:", new Date().toLocaleString()); 
    break;
  default:
    console.log("Opção inválida");               
} 
