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
        <a href=".//tabs/fisicaEquacoes.html">Física-Equações</a>
        <a href=".//tabs/fisicaConceito.html">Física-Conceitos</a>
        <a href=".//tabs/matematicaEquacoes.html">Matemática-Equações</a>   
        <a href=".//tabs/matematicaConceito.html">Matemática-Conceitos</a>   
        <a href=".//tabs/biologia.html">Biologia</a>
        <a href=".//tabs/quimica.html">Química</a>
        <a href=".//tabs/filosofia.html">Filosofia</a>
        <a href=".//tabs/geografia.html">Geografia</a>
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