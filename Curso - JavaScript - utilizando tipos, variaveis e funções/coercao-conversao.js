let valorString = '10';
let valorNumero = 5;

let resultado = valorString + valorNumero  ;
console.log(resultado); // Saída: '105' (o número 5 foi convertido para string e concatenado com a string ‘10’)

let valorNumeroConvertido = parseInt(valorString);

console.log(valorNumeroConvertido); // Saída: 10 (valor convertido para número usando parseInt)

valorNumeroConvertido = Number("1");        // retorna o número 1
console.log(valorNumeroConvertido);
valorNumeroConvertido = Number("Keith");    // retorna NaN
console.log(valorNumeroConvertido);
valorNumeroConvertido = Number(undefined);  // retorna NaN
console.log(valorNumeroConvertido);
valorNumeroConvertido = Number(null);       // retorna o número 0
console.log(valorNumeroConvertido);

console.log('----------');

console.log(parseFloat('4'));         // retorna 4
console.log(parseFloat('4.5'));       // retorna 4.5
console.log(parseFloat('4,5'));       // retorna 4 
console.log(parseFloat('4.5keith'));  // retorna 4.5

console.log('----------');

console.log(String(2));          // retorna '2'
console.log(String(undefined));  // retorna 'undefined'
console.log(String(true));       // retorna 'true'

console.log('----------');

let frase = 'estudando JavaScript'
console.log(frase.includes('Java'));                              //retorna true
console.log(frase.toUpperCase().includes('Java'.toUpperCase()));  //retorna true

let primeiraLetra = frase[0].toUpperCase();
console.log(primeiraLetra+frase.substring(1));