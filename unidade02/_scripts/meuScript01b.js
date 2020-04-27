//alert("JavaScript está funcionando");

var elemento = document.getElementsByTagName("li");

//console.log(elemento.childElementCount);
//retornará undefined, pq? pq não esxiste elementos dentro do li, ele tem um valor em texto mas não elementos
//eu posso pegar do li a quantidad de li q existe, qntos li existe, usando o lenght
//dessa forma:

      //console.log(elemento.length);
      //irá mostrar 03 li no console

      //console.log(elemento);
      //me traz um collection em forma de aray com todos os li

      //console.log(elemento[0].innerText);
      //me retornaará o  elemento de posição 0, no caso calabresa
      //se quiser pegar outro elemento de outra posição é só mudar o numero dentro do []
      //lenght = pegar todos os números de ocorrençias do li, irá me trazer qntos li existe
      for (var i=0; i<elemento.length; i++) {
          console.log( elemento[i].innerText);
      }