/**
 * É necessário saber alguns conceitos básicos sobre o relógio analógico
 * assim ficará mais fácil de entender o código.
 * 
 * Este relógio foi criado em SVG, não é dificil achar este código na internet
 * 
 * é necessário entender que todo círculo tem 360°, 
 * temos 12 pontos pra marcar a hora
 * temos 60 pontos pra marcar os minutos
 * temos 60 pontos pra marcar os segundos
 * 
 * para que esses ponteiros parem no lugar correto é necessário achar um fator multiplicador para acharmos
 * o eixo exato em que cada ponteiro deve estar pra maarcar a hora
 * 
 * Para achar esse fator multiplicador temo que dividir 360° pela quantidade de ponteiro
 * ex.:
 *     360°/12 = 30; Este é o fator miltiplicador da hora
 *     360°/60 =  6; Este é o fator multiplicador dos minutos e segundos pois ambos tem 60 ponteiros
 * 
 * ex.: Suponhamos que queiremos colcocar o ponteiro de minutos em 15
 * então faremos 15 minutos * 6 = 90; 
 * e aplicaremos este código:  minuto.style.transform ="rotate(90deg)";
 * 
 * e assim se usa pra todas as outras situações.
 * 
 * :D
 */