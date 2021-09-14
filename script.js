function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


let button = document.querySelector("button");
let circle = document.getElementById("circle");
circle.style.backgroundImage = "url('img/dbz/trunks.jpeg')"
let textArea = document.querySelector("textarea")

button.addEventListener("click", function(){
    let numeroAleatorio = getRandomArbitrary(1,8)

    
    
    if (numeroAleatorio === 1) {
        circle.style.backgroundImage = "url('img/bolas-de-sinuca/one.jpg')"
        textArea.style.backgroundImage = "url('img/dbz/buu.jpeg')"
        textArea.placeholder = ""
    }

    else if (numeroAleatorio===2) {
        circle.style.backgroundImage = "url('img/bolas-de-sinuca/two.jpeg')"
        textArea.style.backgroundImage = "url('img/dbz/buu.jpeg')"
        textArea.placeholder = ""
    }

    else if (numeroAleatorio===3) {
        circle.style.backgroundImage = "url('img/bolas-de-sinuca/three.jpeg')"
        textArea.style.backgroundImage = "url('img/dbz/buu.jpeg')"
        textArea.placeholder = ""
    }

    else if (numeroAleatorio===4) {
        circle.style.backgroundImage = "url('img/bolas-de-sinuca/four.jpeg')"
        textArea.style.backgroundImage = "url('img/dbz/buu.jpeg')"
        textArea.placeholder = ""
        alert("Parabéns, voce errou! Por favor, erre novamente...")
    }

    else if (numeroAleatorio===5) {
        circle.style.backgroundImage = "url('img/bolas-de-sinuca/five.jpeg')"
        circle.style.backgroundSize = "320px 298px"
        textArea.style.maxWidth = "295px"
        textArea.style.backgroundImage = "url('img/dbz/goku.jpeg')"
        textArea.style.backgroundPosition = "right"
        textArea.placeholder = ""
        alert("Parabéns! Por favor, recarre a página para não achar as minhas gambiarras, hehe")
    }

    else if (numeroAleatorio===6) {
        circle.style.backgroundImage = "url('img/bolas-de-sinuca/six.jpeg')"
        textArea.style.backgroundImage = "url('img/dbz/buu.jpeg')"
        textArea.placeholder = ""
        alert("Parabéns, voce errou! Por favor, erre novamente...")
    }

    else if (numeroAleatorio===7) {
        circle.style.backgroundImage = "url('img/bolas-de-sinuca/seven.jpeg')"
        textArea.style.backgroundImage = "url('img/dbz/buu.jpeg')"
        textArea.placeholder = ""
        alert("Parabéns, voce errou! Por favor, erre novamente...")
    }

    else if (numeroAleatorio===8) {
        circle.style.backgroundImage = "url('img/bolas-de-sinuca/eight.jpeg')"
        textArea.style.backgroundImage = "url('img/dbz/buu.jpeg')"
        textArea.placeholder = ""
        alert("Parabéns, voce errou! Por favor, erre novamente...")
    }

    else if (numeroAleatorio===9) {
        circle.style.backgroundImage = "url('img/bolas-de-sinuca/nine.jpeg')"
        textArea.style.backgroundImage = "url('img/dbz/buu.jpeg')"
        textArea.placeholder = ""
        alert("Parabéns, voce errou! Por favor, erre novamente...")
    }

});