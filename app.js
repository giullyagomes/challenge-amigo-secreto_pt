let amigos = [];

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function adicionarAmigo() {
    console.log('Botão clicado');
    let input = document.getElementById('input-name');
    let nome = input.value.trim();
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    amigos.push(nome);
    input.value = '';
    atualizarLista();
}

function sortear() {
    if (amigos.length === 0) {
        alert('Adicione amigos primeiro!');
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indice];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${sorteado}`;
}

document.querySelector('.button-draw').addEventListener('click', sortear);