//faça um função teste anõnima

document.onclick = function () {
    console.log("Voce clicou");
}
//irá mostrar no console q quntidade de veze q vc clicou

document.onclick = function () {
    alert("Voce clicou no Documento");
}


//window.onload = as açoes só acontecerão quando todo o dom for carregado
window.onload = function() {
    var foto = document.querySelector("#fotocoliseu");
    foto.onclick = function() {
        alert("Voce clicou na foto");
    }
}