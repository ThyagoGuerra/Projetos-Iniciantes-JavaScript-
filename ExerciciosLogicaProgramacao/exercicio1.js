/* function soma(A = 0, B = 0) {
    return A + B;
}
console.log(soma(5, 5)); */

/* function parimpar() {
    let num = Math.random() * (100 - 1) + 1;
    let numint = Math.floor(num);

    if(numint % 2 === 0) {
        console.log(`${numint} é PAR`);
    } else {
        console.log(`${numint} é IMPAR`);
    }
}
parimpar(); */

/* function fors() {
    let frutas = ['Abacaxi', 'Banana', 'Melao'];
    for(let i = 0; i < frutas.length; i += 2) {
        console.log(`Indice ${i}, frutas ${frutas}`);
    }
}
fors(); */

function fizzBuzz(n) {
    // Write your code here
    for(let i = 1; i < n; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();

/* const pessoa = {
    nome: 'Thyago',
    idade: 19,
    cidade: 'São Paulo',
};
for(let chaves in pessoa) {
    console.log(chaves);
    console.log(pessoa[chaves]);
}; */

/* const numeros = [10, 20, 30, 40];
for(let indice of numeros) {
    console.log(indice);
} */