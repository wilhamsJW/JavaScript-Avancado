alert("oiii");

function atribuirTexto() {
    nome.value = "Wilhams";
}

function iniciar() {
    botao.addEventListener("click", atribuirTexto);
    //botão é a id do html, addEventListener é escute, ou seja escute um clik e atribua um texto
}

window.onload = iniciar;
//chamou a função e faz com que todos os eventos só funcionem qndo a página carregar