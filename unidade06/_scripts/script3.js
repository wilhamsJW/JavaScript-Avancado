/** detectar tecla,Muito usaadoo viu, exemplo de uso é em uma
 * calculadora javaScript, onde tenho q mostrar no display 
   os números pressionados */

   function detectarTecla(e) {
        console.log(e.keyCode);
        console.log(e.key);

        var tecla = e.keyCode;
        var meuParagrafo = document.querySelector("p");

        switch(tecla) {
            case 37:
                meuParagrafo.innerHTML = "Esquerda";
                break;
            case 38:
                meuParagrafo.innerHTML = "Para cima";
                break;
            case 39:
                meuParagrafo.innerHTML = "direita";
                break;
            case 40:
                meuParagrafo.innerHTML = "Para baixo";
                break;            
        }

   }
   document.addEventListener("keydown", detectarTecla);
   
   //isso irá mostrar o código das teclas, todas as teclas tem um código
   //com esses códigos vc consegue pegar a tecla deseja e mostrar ao usuário
   //alguma tecla q ele pressionou. 
   //exemplo de código é uma letra "l"
   //código da letra "l" que aparecerá no console:
   //key: "l"
   //keyCode: 76 ---> 76 é o código da letra "l"
