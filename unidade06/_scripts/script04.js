alert("oii");

window.addEventListener("scroll", function() {
    posiçãoY.innerHTML = window.scrollX;
    //scrollX = detecta o scroll horizontal da página
   
    posiçãoX.innerHTML = window.scrollY;
     //scrollY = detecta o scroll vertical da página
});