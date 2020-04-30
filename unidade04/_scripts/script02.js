//alert("Veja se está tudo ok  :D");

//atribuir um parãmetro addEventListner


function atribuirTexto(valorr) {
    nome.value = valorr;
    //se colocar aspas aqui o computador entende q é palavra
    //e não entenderá q se trata de um valor de um função
    //esse valoor poderia ser qq nome
}

function iniciar() {
    botao.addEventListener("click", function() {
        atribuirTexto("Wilhams Meira Júnior")
        //aqui dentro eu atribuir um valor a minha função
        //note que foi mudado o parãmetro de valorr para -> wilhams m. junior
    });
    //botão é a id do html, addEventListener é escute, ou seja escute um clik e atribua um texto
}

window.onload = iniciar;
//chamou a função e faz com que todos os eventos só funcionem qndo a página carregar