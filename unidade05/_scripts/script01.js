alert("oii");

function iniciar() {
    botao1.addEventListener("click", function() {
        mudarCor("green");
    });

        botao2.addEventListener("click", function() {
            mudarCor("red");
        });       
}

function mudarCor (cor) {
    janela.style.backgroundColor = cor;
}

window.onload = iniciar;