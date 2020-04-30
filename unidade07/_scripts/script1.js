function controleFormulario(e) {
    e.preventDefault();
    
    var caixa_nome = nome.value;
    if ( caixa_nome == "") {
        mensagem.innerHTML = "Por favor, preencha este campo.";   
    }
}

//este nome.value é a id de nome no html, value é o valor, óbvio!
//dentro dos parâmetro eu disse: "se a caixa_nome == "" ou seja se a caixa nome for igual
//a nada execute  o passo a seguir que é mostrar a msg -> "Por favor, preencha este campo"  "

function limparCaixa() {
    mensagem.innerHTML = "";
    //mensagem é uma id do html, o vazio dentro das aspas é oq aparecerá como mensagem    
}

function iniciar() {
    formViagem.onsubmit = controleFormulario;
    nome.onfocus = limparCaixa;
    //nome é a id do html, onfocus vai tirar o focu desta msg -> Por favor, preencha este campo
    //porém apenas na caixa nome, se quiser em todas tem q fazer
}

window.onload = iniciar;