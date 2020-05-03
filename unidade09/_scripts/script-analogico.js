//Há um arquivo nesta mesma pasta chamado explicação que está explicando alguns conceitos sobre
//este relógio analógico. 

alert("relógioAnalógico");

var agora;

function  mostrarHora() {
    agora   = new Date();
    var hr  = agora.getHours();
    var min = agora.getMinutes();
    var seg = agora.getSeconds();
    var mil = agora.getMilliseconds();
    
    var ponteiroHora    = hr  * 30 + min/2; //explicaçoes sobre este ->  hr  * 30 + min/2 -> abaixo
    var ponteiroMinuto  = min * 6 + (seg+6)/60; //este são os fatores multiplicadores que vimos na explicação do arquivo desta mesma
    var ponteiroSegundo = seg * 6 + mil/166; //pasta, aqui organizamos pra deixar as varíáveis já com as multipliçoes feitas

    hora.style.transform    = "rotate(" + ponteiroHora    + "deg)"; //lembre-se que hora,minuto e segundo são as IDs 
    minuto.style.transform  = "rotate(" + ponteiroMinuto  + "deg)"; //O método rotate () gira o desenho atual. 
    segundo.style.transform = "rotate(" + ponteiroSegundo + "deg)"; 
    
    //deg = graus, ele fica fora das aspas pq apenas a variável fica dentro das aspas.
    //a variável está informando o grau q vai ser rotacionado, esses graus se muda dinamicamente pq se trata de 
    //um relógio. 
}

var intervalo = setInterval(mostrarHora, 1);
//aqui ficou 1 pra atualizar de milisegundo em milisegundo, não é 1 de segundo não
//é menos q segundo, pq dessa forma o ponteiro segundo grirará continuamente igual um
//relógio rolex, sem dá aqueles pulinhos de segundo em segundo igual aqueles relógios de parede
//porém este efeito de milisegeundo em uma página web afetaria muito desempenho navegador, forçaria bastante
//o navegador, então isso não é muito legal, mas pode se usar sim.

/**
 * Como fazer pra que o ponteiro da hora ande de acordo com os minutos? No sentido de que o ponteiro hora
 * deve ir se encaminhando ou andando em direção a próxima hora e não mudar repentinamente a hora.
 * Como fazer isso/
 * Sabemos que o fator multiplicador da hora é 30, logo sabemos q entre uma hora e outra temos 30°
 * Se o ponteiro do minuto andar até meia hora ou trinta minutos ele andou a metade do círculo
 * ele andou 30 pontos, entre uma hora e outra temos 30°, então se o ponteiro minuto andou a metade do
 * relógio o ponteiro hora deverá andar a metade do seu próprio percuso da hora, então o percurso da metade
 * da hora é 15° pq em cada hora tem 30°
 * 
 * Então se o ponteiro minuto andar 30 minutos, o ponteiro hora deverá andar 15°
 * então temos aí um fator de 1 pra 2 
 * 30 minutos = 15°
 * 60 minutos = 30°
 * é um valor de 50% sempre, valor de metade sempre.
 * 
 * Então o que fazer para que o ponteiro hora caminhe certinho?
 * Basta somar o minuto divido por dois
 * Este é código acima:
 *                     var ponteiroHora    = hr  * 30 + min/2;
 *                      isso foi colocado aqui pq essa variável que determina a rolagem do meu ponteiro
 *                      * 30 é o multiplicador q determina o ponto exato das horas q meu ponteiro deve se encontrar
 *                      + min/2 é variável minuto sempre sendo divida por 2 de acordo com esta regrinha:
 *                           30 minutos = 15°
 *                           60 minutos = 30°
 *                      Então além do ponteiro hora andar de 30 em 30 graus ele vai andar dentro do espaço dos 30°
 *                      quem vai determinar isso é justamente a divisão dos minutos por dois
 * 
 * Agora como fazer para que o ponteiro minuto também ande de acordo com os segundos?
 * Sabemos que o anglo de um segundo para o outro é 6, então o ponteiro minuto tem q andar
 * de 6 em 6 anglos mas isso tem q ser dentro de um minuto para o outro, se ele andar de 6 em 6
 * anglos ele irá andar junto com o ponteiro segundo, o que tá errado.
 * 
 * O anglo de um tempo de um minuto também é 6 porém ele se movimenta menos q o ponteiro segundo
 * pq são determinados de acordo com a hora da minha máquina,
 * O ponteiro minuto tem q andar de 1 em 1 grau, fazemos essa conta:
 *       min * 6 + (seg+6)/60; 
 *       6+6/60 = 1; então o ponteiro minuto andará de um em um
 * 
 * Como fazer para que o ponteiro segundo gire continuamente?
 * 
 * tenho q achar o multiplicador dele, a cada segundo temos um anglo de 6 graus, então pra ele andar mais 
 * rápido de forma contínua preciso acelerar ele, ok? ok..:D, 
 * A cada segundo eu tenho mil milisegundos, então calcule:
 *         1000 / 6 = 166.66 -> então no código acima tem esta linha:
 *         seg * 6 + mil/166; então este foi o ponto mutltiplicador entre um segundo e outro
 *         e faz ele andar de forma elegante sem dá uns pulinhos
 *         
 * 
 */