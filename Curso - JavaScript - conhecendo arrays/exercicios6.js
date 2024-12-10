const numeros = [3, 7, 15, 22, 8, 19, 42, 11, 5, 28, 30];
const temperaturas = [23, 19, 21, 25, 18, 22, 20, 24, 26, 17];
const idades = [30, 25, 40, 22, 35, 29, 31, 28, 33, 27];
const alturas = [1.75, 1.62, 1.80, 1.55, 1.68, 1.90, 1.78, 1.73, 1.85, 1.60];


/*
1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, 
utilizando Spread Operator.

Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, 
por exemplo function funcaoExemplo(...params).
*/
function concatArrays(...listas) {
    return [].concat(...listas); // operador spread para concatenar os arrays
}
console.log(`A lista agrupada é ${concatArrays([numeros, temperaturas, idades, alturas] ) }` );

function e1(listas){
    const listaAgrupada = []
    listas.forEach(lista => listaAgrupada.push([...lista]) );
    return listaAgrupada
}
console.log(`A lista agrupada é ${e1([numeros, temperaturas, idades, alturas] ) }` );

/*
2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
*/
function e2(lista){
    const soma = lista.reduce( (acumulo, valorAtual) => acumulo+valorAtual, 0);
    return soma; 
}
console.log(`A soma de todos os dados da lista é ${e2(numeros)}`);

/*
3 - Considere duas listas de cores:

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
*/
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

function e3_1(){
    const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
    const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

    const coresUnicas = [...new Set([...coresLista1, ...coresLista2])];
    console.log('Cores sem repetir: ', coresUnicas);
}

function e3(listas){
    let listaAgrupada = [];
    for(lista of listas){
        listaAgrupada = listaAgrupada.concat([...new Set(lista)]);
    }
    return listaAgrupada;
}
console.log(`A lista de cores tem ${e3([coresLista1, coresLista2])}`);

/*
4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
*/
function e4(lista){
    const listaNumerosPar = [];
    for(let indice = 0; indice < lista.length; indice++){
        let valor = lista[indice];
        if (valor % 2 === 0){
            listaNumerosPar.push(valor);
        };
    }
    
    return listaNumerosPar;

}
console.log(`Os numeros par das lista são ${e4(numeros)}`);

/*
5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
*/
function e5(){
    const resultado = numeros.filter( (numero) => numero>5 && numero % 3 === 0);
    return resultado
}
console.log(`os numero multiplos de 3 e maiores que 5 são ${e5()}`);
/*
6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
*/
function e6(lista){
    return e2(lista);
}

console.log(`${e6(numeros)} é a soma dos numeros`);
