//declaração das constantes e variáveis com atribuição dos inputs
const inteiro = document.getElementById("inteiro");
const btn = document.getElementById("calc");
const limpar = document.getElementById("limpar");
const aviso = document.getElementById("aviso");
let res = document.getElementById("resultado");
let lista = [];

//criação do array
const criaArray = (int) => {
  lista[0] = 1;
  for (let i = 0; i <= int.value - 1; i++) {
    lista[i] = i + 1;
  }
};

//condicionais para ajuste dos valores
function listagem(inteiro) {
  if (inteiro.value == "") {
    return (res.innerText = ""), (aviso.innerText = "Preencha um valor!");
  } else {
    for (i = 0; i <= inteiro.value; i++) {
      if (lista[i] % 5 == 0 && lista[i] % 9 == 0) {
        lista[i] = "LuidyMoura";
      } else if (lista[i] % 5 == 0) {
        lista[i] = "Luidy";
      } else if (lista[i] % 9 == 0) {
        lista[i] = "Moura";
      }
    }
  }
  return (res.innerText = lista), (aviso.innerText = "");
}

//botão que roda a function
btn.onclick = () => {
  criaArray(inteiro);
  return listagem(inteiro);
};

//botão limpar
limpar.onclick = () => {
  inteiro.value = "";
  res.value = "";
};
