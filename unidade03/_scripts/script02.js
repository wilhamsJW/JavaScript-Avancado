//window.onload = as açoes só acontecerão quando todo o dom for carregado
alert("oiii");

window.onload = function() {

    var caixa = document.querySelector("input#nome");

    caixa.onfocus = function() {
        console.log("on focus na caixa de texto nome");
    }

    caixa.onblur = function() {
        console.log("on blur na caixa de texto nome")
    }

}

