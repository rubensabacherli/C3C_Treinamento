//declaração das constantes e variáveis com atribuição dos inputs
const l1 = document.getElementById("lado1");
const l2 = document.getElementById("lado2");
const l3 = document.getElementById("lado3");
const btn = document.getElementById("tipo");
const limpar = document.getElementById("limpar");
let res = document.getElementById("resultado");

//constante com atribuição da função que calcula o tipo do triângulo
const triangulo = (valor1, valor2, valor3) => {
  if (valor1 == valor2 && valor2 == valor3) {
    return (res.value = "Triângulo Equilátero");
  } else if (valor1 == valor2 || valor1 == valor3 || valor2 == valor3) {
    return (res.value = "Triângulo Isósceles");
  } else {
    return (res.value = "Triângulo Escaleno");
  }
};

//botão com validação do preenchimento dos campos
btn.onclick = () => {
  if (l1.value != "" && l2.value != "" && l3.value != "") {
    res.value = triangulo(l1.value, l2.value, l3.value);
    res.style = "color:black";
  } else {
    res.value = "Preencha todos os valores!";
    res.style = "color:red";
  }
};

//botão limpar
limpar.onclick = () => {
  l1.value = "";
  l2.value = "";
  l3.value = "";
  res.value = "";
};
