alert('Boas vindas, ao jogo do numero secreto!')
let numeroSecreto = 5;
let numeroEscolhido = prompt('Escolha um numero entre 1 e 10')

if (numeroSecreto == numeroEscolhido) {
    alert(`Parabens!! Voce descobriu o numero secreto ${numeroSecreto}.`)
}else {
    alert('Você errou :(')
}