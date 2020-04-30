alert("oiii");

function iniciar() {
    //document.querySelector("#cidade").style.display = "none";
    //forma clássica do javaScript
    escolhercidade.onclick = function() {
         
        if ( escolhercidade.checked == true ) {
            cidade.style.display = "block";
        } else {
            cidade.style.display = "none";
        }
    }
    cidade.style.display = "none";//forma simplificada
    //interessante que o ato de pegar uma ID e atribuir um style a ela, ela passa a funcionar como uma variável
    //global

}



window.onload = iniciar;