alert('Boas vindas, ao jogo do numero secreto!')
let numeroSecreto = 11;
let numeroEscolhido;
let tentativas = 1;

//Enquanto o num.Escolhido nao for igual o num.Secreto...
while (numeroEscolhido != numeroSecreto) {
    numeroEscolhido  = prompt('Escolha um numero entre 1 e 20');

//Se o num.Serecto for igual ao num.Escolhido...
    if (numeroSecreto == numeroEscolhido) {
        alert(`Parabens!! Voce descobriu o numero secreto, ${numeroSecreto} com ${tentativas} tentativas.`);
    }else {
        if(numeroEscolhido > numeroSecreto) {
            alert(`O numero secreto e menor que ${numeroEscolhido}`);
        }else {
            alert(`O numero secreto e maior que ${numeroEscolhido}`);
        }
        tentativas++
    }
}
