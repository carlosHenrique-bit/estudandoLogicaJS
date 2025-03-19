alert('Boas vindas, ao jogo do numero secreto!')
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let numeroEscolhido;
let tentativas = 1;

//Enquanto o num.Escolhido nao for igual o num.Secreto...
while (numeroEscolhido != numeroSecreto) {
    numeroEscolhido  = prompt('Escolha um numero entre 1 e 100');

//Se o num.Serecto for igual ao num.Escolhido...
    if (numeroSecreto == numeroEscolhido) {
        //Para o while
        break;
    }else {
        if(numeroEscolhido > numeroSecreto) {
            alert(`O numero secreto e menor que ${numeroEscolhido}`);
        }else {
            alert(`O numero secreto e maior que ${numeroEscolhido}`);
        }
        tentativas++
    }
}

//Operador Ternário
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabens!! Voce descobriu o numero secreto, ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// Como estava antes 
// if (tentativas > 1){
//     alert(`Parabens!! Voce descobriu o numero secreto, ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Parabens!! Voce descobriu o numero secreto, ${numeroSecreto} com ${tentativas} tentativa.`);
// }