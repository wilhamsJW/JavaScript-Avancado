//alert("script02");


var minhaFoto, albumFoto, indice, intervalo;
//várias variáveis globais declaradas

function mudarFoto() {
    minhaFoto.setAttribute("src", albumFoto[indice])
    indice ++;

    if ( indice >= albumFoto.length) {
        //clearInterval(intervalo); //se quiser parar o carrosel
        indice = 0;

        /** if ( indice >= albumFoto.length)
         * o valor de indice é 0, albumFoto é array com 4 posições, length é o comprimento total da minha array
         * se inidice for maior ou igual   >=   que album.length, execute o passo dado, o passo dado é que inidice 
         * seja 0 , 
         * Como indice vai ser igual ou maior q album foto?
         * note que indice está recebendo ++ na função mudarfoto, isto é uma concatenação, indice comeã com o valor 0
         * e vai concatenado até terminar as posiões da array, então chegará uma hora que indice será igual a array
         * dessa forma se executará o passo dado dentro da estrutura de repetição if, que nesse caso, o passo dado
         * é que indice seja 0 novamente, retornando para a primeira foto ou posição da array
         */
    }
}


function iniciar() {
    minhaFoto = document.querySelector("#espacofoto");
    albumFoto = ["_img/basilica.jpg","_img/arco.jpg","_img/coliseu.jpg","_img/eifel.jpg","_img/basilica.jpg"]
    indice    = 0;

    setInterval(mudarFoto, 3000);
}

window.onload = iniciar;