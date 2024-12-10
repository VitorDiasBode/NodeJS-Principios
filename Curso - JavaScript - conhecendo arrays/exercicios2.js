/* 
1 - Crie uma função que receba dois arrays e os concatene em um único array.
*/

function e1(){
    const nomesPersonagens = [
        "Thalor",
        "Elyria",
        "Bryn",
        "Kael",
    ];
    const nomesPersonagens2 = [
        "Morrigan",
        "Durnan",
        "Sylvara",
        "Garruk",
        "Lirien",
        "Korthak"
    ];
    
    const todosNomes = nomesPersonagens.concat(nomesPersonagens2);
    console.log(todosNomes); 

}

/* 
2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array 
chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.
*/
function e2(){
    const numeros = [1,2,3,4,5,6,7,8,9,10];
    const parteNumeros = numeros.slice(3, 8);
    console.log(parteNumeros);
}

/* 
3 - Dado o array frutas contendo frutas que desejamos comprar na feira:

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']

Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.
*/
function e3(){
    const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

    frutas.splice(2,2, 'Kiwi', 'Pêssego')
    console.log(frutas);
}
e3();

/* 
4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. 
Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal 
seguidos pelos elementos de menuDeSobremesas.
*/
function e4(){
    const menuPrincipal = [
        "Filé de Frango Grelhado",
        "Lasanha Bolonhesa",
        "Risoto de Cogumelos",
        "Peixe ao Molho de Limão",
        "Strogonoff de Carne",
        "Vegetariano: Espaguete ao Pesto",
        "Pizza de Calabresa",
        "Hambúrguer Artesanal",
        "Sopa de Lentilha",
        "Salada Caesar"
    ];
    const menuDeSobremesas = [
        "Bolo de Chocolate",
        "Torta de Limão",
        "Sorvete de Creme com Calda de Frutas Vermelhas",
        "Pudim de Leite Condensado",
        "Mousse de Maracujá",
        "Brownie com Sorvete",
        "Cheesecake de Frutas Vermelhas",
        "Petit Gâteau",
        "Gelatina Colorida",
        "Salada de Frutas"
    ];
    const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

    console.log(menuCompleto);
}
e4();

/* 
5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando 
em 1 e aumentando em 1 a cada elemento.

Dicas:
comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
você pode resolver usando um for dentro de outro for.
*/

function e5(){
    const lista = [];

    for(linha = 0; linha < 3; linha++){
        lista.push([]);
        for(coluna = 0; coluna < 3; coluna++){
            lista[linha].push(linha.toString()+coluna.toString());
        }
    }

    console.log(lista);
    return lista;
}
e5();

/* 
6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.
*/
function e6(){
    const dado = e5()[1][2];
    console.log(dado);

}
e6();

/* 
7 - Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.
*/

function e7(){
    const novaLista = e5()
    novaLista[2][1] = '55';
    console.log(novaLista);

}
e7();

function e8(){
    let matriz = [];
    let valorInicial = 1;
    
    for (let i = 0; i < 3; i++) {
      let linha = [];
      for (let j = 0; j < 3; j++) {
        linha.push(valorInicial++);
      }
      matriz.push(linha);
    }
    
    console.log('Matriz de duas dimensões:');
    console.log(matriz);
    matriz.forEach(row => console.log(row)); // visualização em linhas e colunas
}
e8();