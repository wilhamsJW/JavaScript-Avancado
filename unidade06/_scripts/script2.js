//alert("oiii");
//detectar quando o usuário move o mouse

/**O clientX é uma propriedade somente de leitura da interface MouseEvent que fornece as coordenadas horizontais
 *  dentro da área do aplicativo do cliente em que o evento ocorreu (diferente das coordenadas dentro da página) */


/*
function pegarposicaoMouse (e) {
    console.log(e.clientX);
}

document.addEventListener("mousemove", pegarposicaoMouse);
*/

          //Mostrará na tela quantas vezes o usuário mecheu o mouse e mostrará
          //uma msg pra chmar a atenção do usuário

function pegarPosicaoMouse (w) {
    /*
    var posX = document.querySelector("#posiçãoX");//criando com var do modo tradiconal ou clássico
    var posY = document.querySelector("#posiçãoY");

    posX.innerHTML = w.clientX;
    posY.innerHTML = w.clientX;
    //esse w poder qq letra, menos um número
    */

    //posiçãoX.innerHTML = w.clientX;//forma simplificada, sem necessidade de cria var
    //posiçãoY.innerHTML = w.clientX;//esta linha de código só serve pra mostrar a posição
    //do mouse do eixo x pra eixo y, irá mostrar no bowser a numeração em que o mouse se encontra

    if(w.clientX < 500 ) {
        //var minhaJanela = document.querySelector("#janela");//criando com var do modo tradiconal ou clássico
        //minhaJanela.style.display = "block";

        janela.style.display = "block";//forma simplificada, sem necessidade de cria var
    }
}

document.addEventListener("mousemove", pegarPosicaoMouse);


/**
 * Definição e Uso
 * 
A propriedade clientX retorna a coordenada horizontal (de acordo com a área do cliente) do ponteiro do mouse
quando um evento do mouse foi acionado.

A área do cliente é a janela atual.

Dica: Para obter a coordenada vertical (de acordo com a área do cliente) do ponteiro do mouse, use a
 propriedade clientY .

Nota: Esta propriedade é somente leitura.
 */