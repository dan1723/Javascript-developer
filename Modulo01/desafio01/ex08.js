/*
1) Faça um programa que receba a média de um aluno.
- Caso a média seja < 5 imprima "Reprovado"
- Caso a média seja >= 5 e < 7 imprima "Recuperação"
- Caso a média seja >= 7 imprima "Aprovado"

    EX: 
        Entrada:
            5.5
        Saída:
            Recuperação

 */

const { gets, print } = require('./funcaoAux.ex08');

//Entrada 
const media = gets();

if (media >= 0 && media < 5) {
    print('Reprovado.');

} else if (media >= 5 && media < 7){
    print('Recuperação.');
} else if (media >= 7) {
    print('Aprovado.');
} else {
    print('Número invalido.');
}




 