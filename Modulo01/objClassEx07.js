class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

    mostrarIMC() {
        const imc = this.calcularIMC();
        return `O valor do IMC de ${this.nome} é ${imc.toFixed(2)}`;
    }

    classificarIMC(){
        const IMC = this.calcularIMC();
        if (IMC < 18.5){
            return 'Você está abaixo do peso.';
        } else if (IMC >= 18.5 && IMC <= 25){
            return 'Você está com o peso normal.';
        } else if (IMC > 25 && IMC <= 30){
            return 'Você está acima do peso.';
        } else if (IMC > 30 && IMC <= 40){
            return 'Você está obeso.';
        } else  {
            return 'Você está com obesidade grave.';
        }
    }
}

// const jose = new Pessoa('José', 70, 1.75);
// console.log(jose)
// console.log(jose.classificarIMC());

const danilo = new Pessoa('Danilo', 80, 1.80);
console.log(danilo);
console.log(danilo.mostrarIMC());
console.log(danilo.classificarIMC());