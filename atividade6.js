const A = 5
const B = 3
const C = 4

if(A < B + C && B < A + C && C < A + B) {
  if(A === B && B === C) {
    console.log("Triângulo Equilátero");

  } else if (A === B || A === C || B === C) {
    console.log("Triângulo Isósceles");

  } else {
    console.log("Triângulo Escaleno");
  }

} else {
  console.log("Os lados informados não forma um triângulo");
}

