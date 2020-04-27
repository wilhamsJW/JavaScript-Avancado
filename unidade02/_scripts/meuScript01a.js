//alert("JavaScript está funcionando");
//AVISO: ESSE ARQUIVO FAZ INTERAÇÃO COM O ARQUIVO ex01-acessar-elementos desta pasta

var element = document.getElementById("opcoesPizza");

//console.log(element.children);
//children é o elemtento filho, quando digo filho estou conversando com todos os elementos
//da id opcoespizza, irá me retornar esses elemento em uma array

//console.log(element.children[3].innerHTML);
//colocamos o [] pq o elemento reotornado vem em array, dentro dos [] colocamos o n° do elemento
//q queremos pegar. vou usar muito pra pegar determinado elemento, tenho q usar o innerhtml
//pra pegar o elemento filho

//console.log(element.childElementCount);
//conta qntos elementos tem

//console.log(element.firstElementChild.textContent);
//firstElementChild = me traga o 1° elemento filho
//textContent = conteúdo do texto

var tamanho = element.childElementCount;
//var criada pra contar os elementos dentro da var element declarada no inicio do código
//element.childElementCount = elemento pegue os elementos filhos e conte eles

for(var i=0; i<tamanho; i++) {
    console.log(element.children[i].innerHTML);
}

//explicação desse código acima:
//var i=0; = var declarada como posição inical 0
//i<tamanho = i é menor que tamanho, pois i é 0, então se a var tamnaho é menor q 0 
//façã o próximo passo que é  i++
//i++ = esta é uma ação de concatenar ou juntar, o i++ irá concatenar todo o conteúdo de 
//filho desde a posição inicial 0 até o término.
//nesse caso ele está pegando todos os elementos filhos de dentro da id declarada no inicio
//do código

