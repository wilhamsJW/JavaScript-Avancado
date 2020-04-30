
//vá no ex02-add-elemntos e mude o link pra chamar este arquivo



//         Add um novo intem a lista     OPÇÂO 01


//var pizza = document.querySelector('#opcoesPizza');

/*
var novaPizza = document.createElement("li");
//cria um novo elemento

pizza.appendChild(novaPizza); //apend = acrecentar
novaPizza.innerHTML = "Charque Com Bacon";
*/


//            Add um novo intem a lista     OPÇÂO 02

/*
//apend = acrecentar
pizza.appendChild(document.createElement("li")).innerHTML = "Camarâo";
pizza.appendChild(document.createElement("li")).innerHTML = "Frango";
pizza.appendChild(document.createElement("li")).innerHTML = "Ovo";
*/


//           Add um novo intem a lista     OPÇÂO 03

document.querySelector('#opcoesPizza').appendChild(document.createElement("li")).innerHTML = "Charque, Calabresa e Mustarda";
//note que, não precisei declarar uma vriável lá em cima, assim q peguei a id já acrescentei um novo elemento





