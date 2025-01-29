/* 
                                                    EXERCICIO 5

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado. 

código condição de pagamento: 
- À vista no débito, recebe 10% de desconto;
- À vista no dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

//                                                   RESOLUÇÃO 

// Importando o modulo readline
const readline = require('readline');

// Criando uma interface de leitura e escrita no terminal 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Função para fazer perguntas usando Promise
function question(prompt){
    return new Promise((resolve) => rl.question(prompt, resolve ));
};


//Função principal
(async () =>{

    try{
        //Pergunta o preço do produto e a forma de pagamento
        let p = Number(await question('Informe o preço do produto: '));

        // Valida o preço do produto 
        if (isNaN(p) || p < 0){
            console.log('Preço invalido, Informe um valor valido.');
            rl.close();
            return;
        }


        // Pergunta a forma de pagamento
        console.log(`
            Escolha a forma de pagamento:
            1 - À vista no débito (10% de desconto)
            2 - À vista no dinheiro ou PIX (15% de desconto)
            3 - Em duas vezes (preço normal)
            4 - Acima de duas vezes (10% de juros)
        `);


        let op = Number(await question('Informe a opção de pagamento: '));

        // Valida a opção de pagamento
        if (isNaN(op) || ![1, 2, 3, 4].includes(op)){
            console.log('Opção invalida, digite a opção correta.');
            rl.close();
            return;
        }

        if (op === 1){
            let valorDescon1 = p - (p * 0.10);

            // Formata o valor para moeda brasileira
            let valorFormatado1 = valorDescon1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

            console.log(`O valor do produto pago à vista pelo cartão de débito é ${valorFormatado1}`);
        } else if(op === 2){
            let valorDescon2 = p - (p * 0.15);

            // Formata o valor para moeda brasileira
            let valorFormatado2 = valorDescon2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

            console.log(`O valor do produto pago à vista no dinheiro ou no PIX é ${valorFormatado2}`);
        } else if(op === 3){

            // Formata o valor para moeda brasileira
            let valorFormatado3 = p.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

            console.log(`O valor do produto parcelado em duas vezes é ${valorFormatado3}`);
        } else if (op === 4){
            let valorAcrescen = p + (p * 0.10);

            // Formata o valor para moeda brasileira
            let valorFormatado4 = valorAcrescen.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});

            console.log(`O valor do produto parcelado em mais duas vezes é ${valorFormatado4}`);
        }

    } catch (err){
        console.log(`Ocorreu um erro ${err.message}`);
    } finally{
        rl.close();
    }
})();