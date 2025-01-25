let amigos = [];

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
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  for (i = 0; i < amigos.length; i++) {
    let lista = document.createElement("li");
    lista.textContent = amigos[i];
    listaAmigos.appendChild(lista);
  }
}
