//declaração das constantes e variáveis com atribuição dos inputs
const nota = document.getElementById("nota");
const btn = document.getElementById("calc");
const limpar = document.getElementById("limpar");
const aviso = document.getElementById("aviso");
let res = document.getElementById("resultado");

//função que define o resultado.
function situacao(nota) {
  if (nota.value < 0 || nota.value > 100) {
    res.value = "Digite uma nota entre 0 e 100";
    nota.value = "";
  } else if (nota.value == "") {
    aviso.innerText = "Preencha a nota!";
    nota.focus();
  } else if (nota.value % 1 != 0) {
    res.value = "Digite por favor um número inteiro";
  } else {
    if (nota.value < 38) {
      return (res.value = "Reprovado!"), (aviso.innerText = "");
    } else if (nota.value % 5 == 3) {
      let arredondamento = Number.parseInt(nota.value) + 2;
      return (
        (res.value = `Aprovado! Sua nota, que era ${nota.value} foi arredondada para ${arredondamento}!`),
        (aviso.innerText = "")
      );
    } else if (nota.value % 5 == 4) {
      let arredondamento = Number.parseInt(nota.value) + 1;
      arredondamento.value = nota.value + 1;
      return (
        (res.value = `Aprovado! Sua nota, que era ${nota.value} foi arredondada para ${arredondamento}!`),
        (aviso.innerText = "")
      );
    } else if ((nota.value % 5 != 3) & (nota.value % 5 != 4)) {
      return (
        (res.value = `Aprovado! Nota: ${nota.value}`), (aviso.innerText = "")
      );
    }
  }
}

//botão que roda a function
btn.onclick = () => {
  return situacao(nota);
};

//botão limpar
limpar.onclick = () => {
  nota.value = "";
  res.value = "";
};
