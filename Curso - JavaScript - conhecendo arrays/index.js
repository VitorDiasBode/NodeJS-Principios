const arrayNumeros = [1, 2, 3, 4];
const novaArrayNumeros = arrayNumeros.map( (numero) => multiplicar(numero, 5));

function multiplicar(valor, valor2) {
    const resultado = valor*valor2;
    console.log(`o valor ${valor} * ${valor2} é igual a ${resultado}`);
    return resultado
}