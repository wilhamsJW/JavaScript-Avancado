$(function(e){
    alert("Que legal, seu jQuery está funcionando");
});



//Unidade 04 exercicío 01                  ---> Iserindo conteúdo After e before



/*
$(function(){
    $("<li><img src='imagem/foto4.jpg'></li>").insertAfter("li:last-child");
});
*/
//insertAfter insere o elemento depois do elemento referenciado pelos parenteses,("li:last-child");
//insertBefore isere antes do elemento referenciado, 
//se eu quiser q inserir no elemento um coloco first no lugar do last, 

//Atenção: o primeiro e último elemento devem ser colocados como first e last, use nth(); 


/*
$(function(){
    $("<li><img src='imagem/foto4.jpg'></li>").insertAfter("li:first-child");
    //foto da praia
});

$(function(){
    $("<li><img src='imagem/foto5.jpg'></li>").insertBefore("li:nth(2)");
    //foto arvores no outono
});
*/




// UNIDADE 04 EXERCICÍO 02   ---> CRIAR E PEGAR CONTEÚDO DO HTML - USO DO APPEND(ACRESCENTAR) E PREPEND(PRECEDER)



/*
$(function(){
    $("h1").html("Jquery faz parte de muitas empresas")
    $("ul").append("<li>Se dedique ao máximo aos estudos</li>")
    $("ul").prepend("<li>Este elemento foi acrescentado antes da lista</li>")
})
*/
//coloca-se .html prq o h1 já existe, não estou criando





// UNIDADE 04 EXERCICÍO 03                                 ---> ALTERAR ATRIBUTOS E REMOVER ALGO


/*
    $(function(){
        $("a").attr("title","Alpes Suíços")
        $("a").attr("target","blank")
        //target blank faz abrir em outra página web
        $("a").removeAttr("target") 
        //irá abrir a foto em tamanho maior, porém na sua mesma página     
    })
*/





//  UNIDADE 04 EXERCICÍO 04         ---> REMOVER, ALTERANDO E EMBRULHAR ELEMENTOS/(Alterando a cor das letras)



/*
    $(function(){
        $("li:nth(3)").remove();//removing the element with 3
        $("#line").remove();//removing the element with id
        $("li:last").replaceWith("<li>Conteúdo alterado pelo jQuery</li>")//changing content
        $("ul").wrapAll("<div style='border:1px solid yellow'</div>")//wrapping elements
        $("li:first").css("color","red")//changing letter
        
        // there is the 'wrappinner', used if it was to wrap inside the ul, 'wrapAll' is used to wrap
        // outside which is the example of the border
    })
    //exclui o último item da lista html, excluir o primeiro seria first
    //tbm posso usar li:first e last, porém o nth é mais completo
    //se quiser pegar alguma classe é só colocar o nome da classe usando -> li.nomedaclasse
    //se for id é #nomedaclasse
*/



