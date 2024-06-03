/**
 * Simples Carrosel de Imagens
 * @author Andres Cristian
                [0]             [1]             [2]     */
let slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]
/*
console.log(slides[2])
console.log(slides.length)*/

/*Eventos de Sincronização */
let intervalo = 3000
let indice = 0

//Executa a função dentro do arquivo slideShow.js
show()

function show(){
    //Adicionar efeito de transição (classe FadeOut do CSS no HTML) className ==> pega um valor de Classe
    document.getElementById("slide").className += "FadeOut"
    //Nova Função Anônima para alternar o efeito fade a cada 1 segundo
    setTimeout(function() {
        document.getElementById("slide").src = (`assets/${slides[indice]}`)
        document.getElementById("slide").className = "" //No HTML remove a classe FadeOut
    }, 1000)

    indice++
    if(indice === slides.length){
        indice = 0
    }
    //Troca o slide a cada 3s (3000ms)
    setTimeout(show, intervalo)
}