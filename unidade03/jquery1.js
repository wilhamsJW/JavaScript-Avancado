
$(function(e){
    alert("Que legal, de forma simplificada sua página foi carregada");
});




// EXERCICÍO 02                          ---> Selecionando elementos DOM utilizando seletores                           




/*
alert("Essa página contém " + $("a").length + " links");
//o $ é a substituição de documentGetelent, e o "a" é o elemento que
//vai ser contado pelo lenght, o lenght conta os elementos
alert("Essa página contém " + $("nav a").length + " links");
//contando apenas os elementos da nav
*/

/*
$(function() {
    $("nav a").css("color","red").css("text-decoration",'none');

})
//manioulando todos os elementos
$(function() {
    $("nav a:first").css("color","blue").css("text-decoration",'none');

})
//manipulando o primeiro elemento
$(function() {
    $("nav a:last").css("color","green").css("text-decoration",'none');

})
//manipulando o último elemnto. Se quiser manipula só os ímpares use "odd". se for numero par use "even"
//se quiser só o 2 ou 3 é só colocar o número
//se quiser manipular pelo conteúdo, pois digamos que vc não saiba a posição do elemento, se coloca 
//contains("e o texto ou elemento")

*/




// EXERCICÍO 03                            ---> Selecionando Elementos através de atributos





/*
$( function(e) {
    $("li[class]").css("background-color","#FF9");
//para manipular todas as "li" coloque apenas "li", para manipular apenas as class coloque
//class dentro dos colchetes[], para manipular uma id coloque o código da id nos []
});
*/

/*
$(function(e){
    $("li.vermelho").css("background","black");
});
//posso manipular com o ponto final para as classes e # para as ids
*/




//EXERCICÍO PROJETO.HTML                             ---> Add imagens --> After e Before



/*
$(function(e){
    $("li a[href$='.pdf']").after("<img src='imagens/icon_pdf.gif'>")
});
//li vai no elemento "a" e procura um [href$='.pdf'] e depois de achar os elemento coloque depois deles
//a imagem. after em portugues quer dizer: depois, na frente

$(function(e){
    $("li a[href$='.zip']").before("<img src='imagens/icon_zip.gif'>")
});
//li vai no elemento "a" e procura um [href$='.pdf'] e depois de achar os elemento coloque antes deles
//a imagem. before em portugues quer dizer: antes
*/




