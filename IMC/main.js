const form = document.querySelector('#formulario');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previni o o evento dos navegadores

    // Trim, está retirando o espaçamento do valor
    const name = document.querySelector('#nome').value.trim(); 
    const inputpeso = document.querySelector('#peso');
    const inputaltura = document.querySelector('#altura');

    // Replace, está informando que poderá utilizar as pontuações ',' e '.'
    const peso = Number(inputpeso.value.replace(',', '.'));
    const altura = Number(inputaltura.value.replace(',', '.'));

    // Se o campo estiver vazio, vai atribuir uma mensagem.
    if(name === '' || peso === '' || altura === '') {
        setResultado('Cadastro Incompleto!', false);
        return;
    };
    
    // Se o campo estiver vazio ou não tiver um numero ou menor que zero, vai atribuir uma mensagem.
    if (!peso || peso <= 0) {
        setResultado('Peso inválido! Insira um valor maior que zero.', false);
        return;
    }
    
    // Se o campo estiver vazio ou não tiver um numero ou menor que zero, vai atribuir uma mensagem.
    if (!altura || altura <= 0) {
        setResultado('Altura inválida! Insira um valor maior que zero.', false);
        return;
    }
    

    // Variavel que vai obter os valores dos parâmetros peso e altura
    const imc = getImc(peso, altura);
    // Variavel que vai obter os valores do IMC e vai informar qual é o nivel desse valor
    const nivel = getNivelImc(imc);
    const msg = `${name}, seu IMC é ${imc} (${nivel})` // Resultado
    setResultado(msg, true); // Atribui a variável msg como verdadeira
});

function getImc(peso, altura) {
    const imc = peso / altura ** 2; // Cálculo para descobrir o IMC
    return imc.toFixed(2); /* Retorna o valor do cálculo, fixando o valor
                            e adicionando 2 casas decimais */ };

function getNivelImc(imc) {
    // Um Array com os niveis que serão informados pelo valor do IMC
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    // Informando o valor do IMC, vai retornar o nivel do nosso Array 
    if(imc >= 39.9) return nivel [5]; // Retorna Obesidade Grau 3
    if(imc >= 34.9) return nivel [4]; // Retorna Obesidade Grau 2
    if(imc >= 29.9) return nivel [3]; // Retorna Obesidade Grau 1
    if(imc >= 24.9) return nivel [2]; // Retorna Sobrepeso
    if(imc >= 18.5) return nivel [1]; // Retorna Peso normal
    if(imc < 18.5) return nivel [0]; // Retorna Abaixo do peso
}

function criarP() { // Função onde aparecerá a informarção
    const p = document.createElement('p'); // Criando novo elemento
    return p; // Retornando esse Elemento
}

// Função que vai atribuir os valores.
// isValid -> Vai validar alguma informação, que seria as cores de fundo da mensagem
function setResultado(msg, isValid) { 
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = ' '; // O Resultado não vai ter nenhum valor
    const p = criarP(); // Puxamos a função do novo elemento

    if(isValid) {
        // Se for verdade vai adicionar na classe 'paragrafo-resultado' 
        p.classList.add('paragrafo-resultado');
    } else { 
        // Se for falso vai adicionar na classe 'bad'
        p.classList.add('bad');
    }

    // O Elemento p (paragrafo) vai receber o texto do msg
    p.innerHTML = msg;
    resultado.appendChild(p); // O Elemento p, foi adicionado como um elemento filho para o resultado
}