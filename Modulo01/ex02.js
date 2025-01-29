                                        // EXERCÍCIO 02.

// faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
// 1 - preço do etanol;
// 2 - preço da gasolina;
// 3 - o tipo de combustivel que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

                                        // RESOLUÇÃO DO EXERCÍCIO 02:


// Importa o mudulo Readline
const readline = require('readline')

// Cria uma interface de leitura e escrita no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


// função para fazer perguntas usando Promises
function question(prompt){
    return new Promise((resolve) => rl.question(prompt, resolve))
}


// Função principal
(async () => {
    try{
        // Faz as perguntas ao usuário
        const combustivel = await question('Informe o tipo de combustível que o seu carro utiliza (etanol/gasolina):')
        const kmPorLitro = Number(await question('Informe quantos KM seu carro faz com 1 litro de combustível: '))
        const distancia = Number(await question('Digite a distância em quilômetros que será percorrida: '))

        // Valida os valores de entrada
        if(isNaN(kmPorLitro) || isNaN(distancia) || kmPorLitro <= 0 || distancia <= 0){
            console.log('Por favor, insira valores numéricos válidos maiores que zero.')
            rl.close()
            return
        }

        // Função que calcula o valor gasto na viagem
        function calculaValorViagem(combustivel, kmPorLitro, distancia){
            const pEtanol = 4.06
            const pGasolina = 5.79
            
            const litrosComsumidos = distancia / kmPorLitro
            if(combustivel.toLowerCase() === 'etanol'){
                return litrosComsumidos * pEtanol
            }else{
                return litrosComsumidos * pGasolina
            }
        }

        // Calcula o custo da viagem
        const custoTotal = calculaValorViagem(combustivel, kmPorLitro, distancia)

        // Formata o valor para moeda brasileira
        const valorFormatado = custoTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        // Exibe o resultado formatado
        console.log(`O valor total gasto na viagem será: ${valorFormatado}`)
    } catch(err){
        console.error('Ocorreu um erro: ', err.message)
    } finally{
        rl.close()
    }
})()