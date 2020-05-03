alert("script01")


var intervalo, agora;

//explicação de setDoisDigitos abaixo
function setDoisDigitos(tempo) {
    if(tempo<10) {
        return "0" + tempo;
    } else {
        return tempo;
    }
}

function mostrarHora() {
    agora       = new Date();
    var hora    = setDoisDigitos(agora.getHours());
    var minuto  = setDoisDigitos(agora.getMinutes());
    var segundo = setDoisDigitos(agora.getSeconds());

    relogio.innerHTML = hora + ":" + minuto + ":" + segundo;
    
}

function iniciar () {
    intervalo = setInterval(mostrarHora);
}

window.onload = iniciar;
//tem a função de verificar o carregamento da página e chamar a função

/**
 * Explição da função setDoisFigitos(poderia ser qq nome, mas a convenção dos progrmadores pede para que a função 
 * explique o que ela está fazendo.)
 * 
 * foi passado um parãmetro pra função chamado de tempo(poderia ser qq outro nome), foi dito que quando esse parãmetro
 * fosse menor que 10 retornasse o número zero mais o parãmetro tempo
 * 
 * Note que a função setDoisDigitos está sendo chamada pra ser executada dentro da var hora e das demais.
 * 
 * No caso da var hora, hora tem acesso as horas do relógio do seu pc, óbvio! então a função setDoisDigitos
 * está enxergando isso também e irá funcionar quando aparecer números menores que 10, qunado isso acontecer
 * a função irá retornar um 0 + o parãmetro tempo, mas qume é tempo???
 * 
 * Tempo é apenas um parãmetro(poderia ser qq nome), lembre-se q a função setDoisDigitos enxerga tudo da var hora,
 * então a função verá quando tempo vai ser menor que 10 e enviará um número zero, para que fique um zero
 * ao lado dos números 0 á 9
 * 
 * Mas pq dizemos pra retornar + tempo? -> return "0" + tempo;
 * O tempo ve o que está sendo lhe dado e recebe esses dados e envia, ele envia um zero acompanhado do número
 * abaixo de dez + tempo, este tempo é o valor que ele recebe, tempo recebe todas as horas e envia ou retornar
 * todas as horas, porém qunado um némro for abaixo de 10 ele envia um zero pra acompanahar
 * 
 * Então tempo está recebendo os dados da váriavel que ele foi atribuído e está enviando esses dados para
 * o browser, o parãmetro tempo e a função setDoisDigitos tem acesso á todos os dados da váriavel
 */