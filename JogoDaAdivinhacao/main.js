let escolha = prompt('Escolha um Número:');
let bot = Math.random() * (10 - 1) + 1;
let escolhaBot = Math.round(bot);

escolha = parseInt(escolha);

if(escolha === escolhaBot) {
    alert(`Usuário Acertou, o Bot escolheu ${escolhaBot}`);
} else {
    alert(`Usuário Errou, o Bot escolheu ${escolhaBot}`);
}