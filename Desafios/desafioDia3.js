// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
const resultado = document.getElementById("resultado")
// let contador = 1
// while(contador <= 10){
//     resultado.innerHTML += '<br>' + contador;
//     contador++
// }


// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
// let contador = 10
// while(contador >= 0) {
//     resultado.innerHTML += '<br>' + contador;
//     contador--
// }


// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
// let numeroEscolhido = prompt('Digite um numero')
// while(numeroEscolhido >= 0){
//     resultado.innerHTML += '<br>' + numeroEscolhido;
//     numeroEscolhido--
// }


// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroEscolhido = prompt('Digite um numero')
let contador = 0
while(contador <= numeroEscolhido){
    resultado.innerHTML += '<br>' + contador
    contador++
}