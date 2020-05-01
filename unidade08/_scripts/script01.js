alert("script01");


function initial() {
    var minhafoto = document.querySelector("#espacofoto"); 
    

    setTimeout(mudarFoto, 3000); //seTimeout serve como temporizador / 3000 são 3 segundos, é o tempo q vai
    //mudar a foto
    function mudarFoto() {
        minhafoto.setAttribute("src", "_img/eifel.jpg");
        //setAtribute eu determino qual atributo eu quero mudar, no caso é o src
        //após a virgula entre aspas eu coloco o novo valor que quero atribuir
        //que é uma imagem
    }

}

window.onload = initial;


