const dados = [
    { tipo: "D20", lados: 20, material: "plástico", cor: "vermelho" },
    { tipo: "D12", lados: 12, material: "metal", cor: "azul" },
    { tipo: "D10", lados: 10, material: "plástico", cor: "verde" },
    { tipo: "D8", lados: 8, material: "resina", cor: "amarelo" },
    { tipo: "D6", lados: 6, material: "madeira", cor: "marrom" },
    { tipo: "D4", lados: 4, material: "plástico", cor: "preto" },
];

/* 
Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
*/
function e1(){    
    for(dado of dados){
        console.log(dado);
    }

}
e1();
/* 
Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
*/
function e2(lista){
    for(let indice = 0; indice<lista.length; indice++){
        console.log(`${indice} - ${Object.values(lista[indice])[0]} `);
    }

}
e2(dados);
/* 
Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
*/
function e3(lista){
    let soma = 0;

    for(let i=0; i<lista.length; i++){
        soma += lista[i];
    }
    return soma;

}

let listaFaceDados = [];
for(dado of dados){listaFaceDados.push(Object.values(dado)[1]);}
console.log(`A soma dos dados é ${e3(listaFaceDados)}`);
/* 
Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 
'o menor número é X e o maior número é Y'.
*/
function e4(lista){
    let menorNumero = lista[0]; 
    let maiorNumero = lista[1];

    for(numero of lista){
        console.log(numero);
        if(numero < menorNumero){
            menorNumero = numero;
        }else if(numero > maiorNumero){
            maiorNumero = numero;
        }
    }

    return `o menor numero é ${menorNumero} e o maior numero é ${maiorNumero}`;
}
console.log(e4(listaFaceDados));

/* 
Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas
 os números pares contidos nesse array.
*/
function e5(){
    const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
    for(numero of numeros){
        if(numero%2 === 0){
            console.log(`${numero} é par`);
        }
    }
}
e5();
/* 
Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
*/
function e6(){
    const numeros = [4, 6, 8, 10, 12, 20];
    let media = 0;
    
    for(numero of numeros){
        media += numero;
    }
    media /= numeros.length;
    console.log(`A média é ${media}`);

}
e6();

