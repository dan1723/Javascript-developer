/*                                              EXERCICIO 04

O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulto.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo. 

IMC em adultos Condição:
- Abaixo de 18.5: abaixo do peso;
- Entre 18.5 e 25: Peso normal;
- Entre 25 e 30: acima do peso;
- Entre 30 e 40: Obeso;
- Acima de 40: obsidade grave;
*/

//                                              RESOLUÇÃO 


// Importando o modulo readline
const {resolve} = require('path');
const readline = require('readline');


// Criando uma interface de leitura e escrita do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para fazer perguntas usando Promise
function question(prompt){
    return new Promise((resolve) => rl.question(prompt, resolve));
};

// Função principal
(async () => {

    try{
        // Pergunta o peso e a altura
        let p = Number(await question('Informe o seu peso: '));
        // Valida os valores de entrada do peso
        if (isNaN(p) || p < 0){
            console.log('Valor invalido! Insira um número valido.')
            rl.close();
            return;
        }

        let alt = Number(await question('Infome a sua altura: '));
        // Valida os valores de entrada da altura
        if (isNaN(alt) || alt < 0){
            console.log('Valor invalido! Insira um número valido.')
            rl.close();
            return;
        }

        

        // Calculo do IMC
        let imc = p / (alt * alt);

        // Classificação do peso, conforme o padrão numérico do IMC
        if (imc < 18.5){
            console.log('Você está abaixo do peso.');
        } else if (imc >= 18.5 && imc <= 25){
            console.log('Você está com o peso normal.');
        } else if (imc > 25 && imc <= 30){
            console.log('Você está acima do peso.');
        } else if (imc > 30 && imc <= 40){
            console.log('Você está obeso.');
        } else  {
            console.log('Você está com obesidade grave.');
        }
    } catch (err){
        console.log(`Ocorreu um erro: ${err.message}`);
    } finally{
        rl.close();
    }
})();