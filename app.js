let amigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if(amigo == ""){
        alert('Campo vazio, por favor insira um nome!');
    } else {
        amigos.push(amigo);
        limparCampo();
    }
    console.log(amigos);
}

function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}