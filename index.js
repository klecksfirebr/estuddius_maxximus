const butInicio = document.getElementById('butInicio')
const bodyHMTL = document.querySelector('body')

butInicio.addEventListener('click', () => {

    const ninjaTurtles = new Audio("../sound/ninjaTurtles.mp3")
    ninjaTurtles.volume = 0.1;
    ninjaTurtles.play()

    bodyHMTL.innerHTML = 
    `<nav>
        <br><br>
        <h1>Site de estudo bagual</h1>
        <a href=".//tabs/fisica.html">Física</a>
        <a href=".//tabs/matematica.html">Matemática</a>   
    </nav>
    <main>
        <br><br><br><br>
        <div id="img">
        <img src="./img/nerd.gif" alt="" id="nerd">
        <img src="./img/ninjaTurtles.gif" alt="" id="ninjaTurtles"><br>
        <img src="./img/gigachad.gif" alt="" id="gigachad">
        </div>
    </main>`

})