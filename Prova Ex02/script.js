//declaração das constantes e variáveis com atribuição dos inputs
const valorA = document.getElementById("valorA");
const valorB = document.getElementById("valorB");
const valorC = document.getElementById("valorC");
const btn = document.getElementById("calc");
const limpar = document.getElementById("limpar");
let res = document.getElementById("resultado");

//declaração do Delta
let delta = (vA, vB, vC) => {
  return (delta.value = Math.pow(vB, 2) - 4 * vA * vC);
};

//atribuição dos valores de X nos índices do Array
function valorX1() {
  if (valorA.value == "" || valorB.value == "" || valorC.value == "") {
    return (res.style = "color:red"), (res.value = "Preencha os Três valores");
  } else if (delta.value < 0) {
    return (res.style = "color:black"), (res.value = "Delta é negativo!");
  } else {
    let valoresX = [];
    valoresX[0] = (-valorB.value + Math.sqrt(delta.value)) / (2 * valorA.value);
    valoresX[1] = (-valorB.value - Math.sqrt(delta.value)) / (2 * valorA.value);
    return (res.style = "color:black"), valoresX;
  }
}

//botão que executa a function passando os valores dos Inputs
btn.onclick = () => {
  delta(valorA.value, valorB.value, valorC.value);
  res.value = valorX1();
};

limpar.onclick = () => {
  valorA.value = "";
  valorB.value = "";
  valorC.value = "";
  res.value = "";
};
