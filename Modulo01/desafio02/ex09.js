/*
2) Faça um programa que receba N (quantidade de números) e seus respectivos valores. Imprima o maior número par e o menor número ímpar.

    EX: 
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número par: 1
 */

const { gets, print } = require('./funcaoAux.ex09');

const indice = gets();
let maiorPar = null;
let menorImpar = null;

for (i = 0; i < indice; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        if (numero > maiorPar || maiorPar === null) {
            maiorPar = numero;
        }
    } else {
        if (numero < menorImpar || menorImpar === null) {
            menorImpar = numero;
        }
    }
}

print(`Maior número par: ${maiorPar}`);
print(`Menor número impar: ${menorImpar}`);