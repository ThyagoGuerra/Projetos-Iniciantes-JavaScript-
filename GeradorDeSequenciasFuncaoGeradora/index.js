function* gerador() {
    let numeros = 1;
    while(true) {
        yield numeros++ * 2;
    }
}

const gera = gerador();
console.log(gera.next());
console.log(gera.next());
console.log(gera.next());
console.log(gera.next());
console.log(gera.next());
console.log(gera.next());
console.log(gera.next());
console.log(gera.next());
console.log(gera.next());
console.log(gera.next());