/* Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

Declare uma variável chamada nome e atribua a ela o valor "Lua".

Crie uma variável chamada idade e atribua a ela o valor 25.

Defina uma variável numeroDeVendas e atribua a ela o valor 50.

Defina uma variável saldoDisponivel e atribua a ela o valor 1000.

Exiba um alerta com o texto "Erro! Preencha todos os campos"

Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.

Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.

Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.

Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!". */

alert('Boas vindas ao nosso site!')

let nome = 'lua';

let idade = 25;

let numeroDeVendas = 50;

let saldoDisponivel = 1000;

alert('Erro! Preencha todos os campos')

let nomeDousuario = prompt('Qual o seu nome?');
nome = nomeDousuario;
document.write('Meu nome é ' + nome + '<br>')

let idadeDousuario = prompt('Qual sua idade?');
idade = idadeDousuario;
document.write('Tenho ' + idade + ' anos.')

if (idade >= 18) {
    alert('Pode tirar a habilitação')
}


