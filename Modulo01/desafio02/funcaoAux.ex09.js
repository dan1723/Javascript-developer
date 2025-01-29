const numeros = [5, 3, 4, 1, 10, 8];
let i = 0;

function gets() {
    const numero = numeros[i];
    i++;
    return numero;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };