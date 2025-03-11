// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let resposta = prompt('Qual dia da semana?').toLowerCase()
let diaDaSemana = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];
let fimDeSemana = ['sabado', 'domingo']

if (resposta == diaDaSemana[0] ||resposta == diaDaSemana[1] ||resposta == diaDaSemana[2] ||resposta == diaDaSemana[3] ||resposta == diaDaSemana[4]) {
    alert('Boa semana!')
}else {
    if (resposta == fimDeSemana[0] || resposta == fimDeSemana[1]) {
        alert('Bom fim de semana!')
    }
}
// 1 QUEST


// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt()
if (numero % 2) {
    alert('Este numero e impar')
}else {
    alert('Este numero e par')
}
// 2 QUEST


// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let numeroPontuacao = prompt("Digite um numero")
if(numeroPontuacao >= 100) {
    alert('Parabens voce venceu!')
}else {
    alert('Tente novamente para ganhar.')
}
// 3 QUEST


// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoDaConta = 100
alert(`Seu saldo é ${100},00 reais.`)
// 4 QUEST


// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeDoUsuario = prompt('Digite seu nome')
alert(`Bem vindo(a) ${nomeDoUsuario}`)
// 5 QUEST