alert("script ok!!!");

function mudarCor (cor) {
   //document.querySelector("#janela").innerHTML = cor; //forma clássica
   //document.querySelector("#janela").className = cor;
   
     janela.innerHTML = cor;
     janela.className = cor; //forma simplificada, fazendo direto pegando a ID

   //innerHTML fará aparecer um texto, nesse caso o texto q tá sendo dado no parãmetro da function iniciar
   //className chama uma classe, nesse caso vai chamar um classe que está no css, uma classe chamada vermelho
   
   //essa classe vermelho está alterando um backgroun color pra red ou vermelho
   //então quando o usuário clickar no botão2 irá invocar innerHTML e o className eles farão o que eles
   //representam
}

function iniciar() {
    botao2.addEventListener("click", function() {
        mudarCor("vermelho");
    });

    botao1.addEventListener("click", function() {
        mudarCor("amarelo");
    });
}

window.onload = iniciar;

//note: que dentro da function iniciar coloquei um função anõnima, dessa forma consigo
//chamar outra function pra executar o que eu quero passando apenas o parãmetro dela

//nesse exercicío, estamos alterano css, o backgroun-color já existe no css, estou apenas interagindo com o css,
//não estou mudando via javascript o background-color