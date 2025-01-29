/*
3) Faça um programa que calcule e imprima o salário a ser transferido para im funcionário. 

- Para realizar o calculo receba o valor bruto do salário e o adicional dos benecifios;
- O salário a ser transferido é calculado da seguinte maneira: 

    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos beneficios. 

Para calcular o percentual de imposto segue as aliquotas: 

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%
 */

const { gets, print } = require('./funcaoAux.ex10');

const salarioBruto = gets();
const valorBeneficios = gets();

function calcularPorcentagem(valor, percentual){
    return valor * (percentual / 100);
}

function pegarAliquota(salario){
    if(salario > 0 && salario <= 1100){
        return 5;
    } else if(salario > 1100.01 && salario <= 2500.00){
        return 10;
    } else{
        return 15;
    }
}

const aliquotaImposto = pegarAliquota(salarioBruto);

const valorImposto = calcularPorcentagem(salarioBruto, aliquotaImposto);

const valorATransferir = salarioBruto - valorImposto + valorBeneficios;

print(valorATransferir);


// if(salarioBruto > 0.00 && salarioBruto <= 1100.00){
//     let percentualDeImposto = salarioBruto * 0.05;
//     let salarioLiquido = salarioBruto - percentualDeImposto + 200.00;
//     let valorFormatado = salarioLiquido.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
//     print(`O salário liquido desse funcionário é de ${valorFormatado} reais.`);
// } else if(salarioBruto > 1100.01 && salarioBruto <= 2500.00){
//     let percentualDeImposto = salarioBruto * 0.10;
//     let salarioLiquido = salarioBruto - percentualDeImposto + 100.00;
//     let valorFormatado = salarioLiquido.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
//     print(`O salário liquido desse funcionário é de ${valorFormatado} reais.`);
// }else{
//     let percentualDeImposto = salarioBruto * 0.15;
//     let salarioLiquido = salarioBruto - percentualDeImposto + 50.00;
//     let valorFormatado = salarioLiquido.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
//     print(`O salário liquido desse funcionário é de ${valorFormatado} reais.`);
// }