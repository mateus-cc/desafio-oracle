let amigos = [];

function adicionarAmigo() {
    let valor = document.getElementById('amigo').value;

    if (valor == "") {
        alert('Por favor, insira um nome')
    } else {
        amigos.push(valor);
        console.log(amigos);
        document.getElementById('amigo').value = "";
        atualizarLista()
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos na lista")
    } else {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(numeroAleatorio)
        let amigoSorteado = amigos[numeroAleatorio];
        alert(`${amigoSorteado}`)
    }
}