                                // EXERCICIO 01 

// faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis, sendo elas: 
// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem;

// Imprima no console o valor que será gasto de combustivel para realizar esta viagem. 



                                // RESOLUÇÃO DO DESAFIO 01: 


// Importa o módulo readline
const readline = require('readline');

// Cria uma interface de leitura e escrita no terminal
const rl = readline.createInterface({
    input: process.stdin, // Entrada (teclado)
    output: process.stdout // Saída (console)
})


// // Variáveis fixas
const preco = 5.59
const gastoKmporLitro= 12

rl.question('Digite a distância em quilômetros que será percorrida: ', (distancia) => {
    //Converte a entrada do usuário para número
    distancia = Number(distancia)


     // Verifica se o valor é válido
    if(isNaN(distancia) || distancia <= 0){
        console.log('Por favor, insira um valor válido para a distância.')
    }else{
        // Calcula o valor dos litros que foram consumidos
        let litrosComsumidos = distancia / gastoKmporLitro

         // Calcula o valor total gasto na viagem 
        let custoTotal = litrosComsumidos * preco

        // Convertando o valor total para a unidade monetário real
        let valorFormatado = custoTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
       // Exibe o resultado formatado
        console.log(`O valor total gasto na viagem será: ${valorFormatado}`)
    }

    // Fecha a interface readline
    rl.close()
})
