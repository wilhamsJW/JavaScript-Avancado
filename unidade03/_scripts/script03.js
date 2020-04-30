//

//onchange usado para mostrar o valor do objeto
//irá mostrar quantas vezes fiz determinada ação, no caso desse exercicío quantas vezes alterei a escolha q foi submetida
window.onload = function() {

    var meu_pais = document.querySelector("#pais")

    meu_pais.onchange = function() {
        console.log("mudou a seleção");
    }

    meu_pais.onchange = function() {
        console.log(meu_pais.value)
        //irá mostrar qual país q o usuário ta escolhendo
    }
}