                                    // EXERCÍCIO 03

// Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.Faça

// Média = (nota 1 + nota 2 + nota 3) / 3;

// classificação:
//  - Média menor que 5, reprovação; 
//  - Média entre 5 e 7, recuperação; 
//  - Média acima de 7, passou de semestre; 

                                    // RESOLUÇÃO DO EXERCÍCIO 02

// Importando o modulo readline
const { resolve } = require('path');
const readline = require('readline');

// Criando uma interface de leitura e escrita do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Função para fazer perguntas usando Promises
function question(prompt){
    return new Promise((resolve) => rl.question(prompt, resolve))
};


// Função principal
(async () => {

    try{
        // Pergunta a nota dos alunos
        let n1 = Number(await question('Informe a 1º nota do aluno: '));
        // Valida os valores de entrada de n1
        if (isNaN(n1) || n1 < 0) {
            console.log('Por favor, insira notas válidas.');
            rl.close();
            return;
        }


        let n2 = Number(await question('Informe a 2º nota do aluno: '));
        // Valida os valores de entrada de n2
        if (isNaN(n2) || n2 < 0) {
            console.log('Por favor, insira notas válidas.');
            rl.close();
            return;
        }


        let n3 = Number(await question('Informe a 3º nota do aluno: '));
        // Valida os valores de entrada de n3
        if (isNaN(n3) || n3 < 0) {
            console.log('Por favor, insira notas válidas.');
            rl.close();
            return;
        }

        

        // Média das notas do aluno 
        let med = (n1+n2+n3) / 3;

        //Classificação do aluno com base na média
        console.log(`Média: ${med.toFixed(2)}`)
        if (med < 5){
            console.log('Classificação: Reprovado!');
        } else if (med >= 5 && med <= 7){
            console.log('Classificação: Recuperação!');
        } else {
            console.log('Classificação: Passou de semestre');
        }
    } catch (err){
        console.error('Ocorreu um erro: ', err.message);
    } finally {
        rl.close();
    }
})();
