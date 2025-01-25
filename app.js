let amigos = [];
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function adicionarAmigo() {
  let amigo = document.querySelector("input").value;
  if (amigo == "") {
    alert("Campo vazio, por favor insira um nome!");
  } else {
    amigos.push(amigo);
    limparCampo();
  }
  atualizarListaDeAmigos();
}

function limparCampo() {
  campo = document.querySelector("input");
  campo.value = "";
}

function atualizarListaDeAmigos() {
  listaAmigos.innerHTML = "";
  for (i = 0; i < amigos.length; i++) {
    let lista = document.createElement("li");
    lista.textContent = amigos[i];
    listaAmigos.appendChild(lista);
  }
}

function sortearAmigo() {
  if (amigos.length == 0) {
    alert("Adicione um amigo primeiro!");
  } else {
    let indiceEscolhido = gerarNumeroAleatorio();
    listaAmigos.innerHTML = "";
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigos[indiceEscolhido]}!`;
    amigos = [];
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * amigos.length);
  return numeroEscolhido;
}
