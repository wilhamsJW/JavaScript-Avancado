alert("oiii");

window.addEventListener("scroll", function() {
    posiçãoY.innerHTML = window.scrollY;
    posiçãoX.innerHTML = window.scrollX;
    //as duas linhas acima só serve pra mostrar no browser os eixos q se encontra o scroll
    //para que o dev tenha noção de onde mostrar o contéudo na página

    if( window.scrollY >= 920) {
        conteúdo.style.display = "block";
        //900 é a numeração do scroll no browser, consigo ver isso com essas duas linhas:
        // posiçãoY.innerHTML = window.scrollY;
        //posiçãoX.innerHTML = window.scrollX;
    }
})