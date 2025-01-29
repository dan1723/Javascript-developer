class Carros {
    marca;
    cor;
    quantKmPorLitro;

    constructor(marca, cor, quantKmPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.quantKmPorLitro = quantKmPorLitro;
    }

    calcularGasto(distancia, precoCombustivel) {
       let quantCombustivel = distancia / this.quantKmPorLitro;
       let valorGasto = quantCombustivel * precoCombustivel;
       let valorFormatado = valorGasto.toLocaleString('pt-BR', {style:"currency", currency:'BRL'});
       
       return `O valor gasto de combústivel para essa viagem é de ${valorFormatado} reais.`
    }
}

const palio = new Carros('Fiat Palio', 'Preta', 12);
palio.calcularGasto(70,5);
console.log(palio.calcularGasto(70,5));

const uno = new Carros('Fiat Uno', 'Branca', 10);
console.log(uno.calcularGasto(70, 5));





