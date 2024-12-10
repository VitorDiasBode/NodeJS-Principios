/*
utilize a função require() para importar o conteúdo do arquivo dados.json.

Imprima no console o conteúdo importado utilizando a função console.log().

Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados.
*/

function e1(){
    const dados = require("./dados.json");
    
    console.log(dados);

    dados.usuarios.push({
        id:103,
        nome:'Keith',
        email:'keith@example.com'
    });

    console.log(dados);

    const stringDados = JSON.stringify(dados);
    console.log(stringDados);

}
e1();

/*
utilize o método require para importar o conteúdo do arquivo dados.json.

Imprima no console o objeto JavaScript resultante da leitura do arquivo
*/

function e2() {
    e1();
}
e2();
console.log();

/*
Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.
*/
function e3() {
    const produto = {
        id: 1,
        nome: "Camiseta",
        preco: 25.99
    };

    const stringProduto = JSON.stringify(produto);
    console.log(stringProduto);

}
e3();
console.log();

/*
4 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais,
incluindo pelo menos três elementos no array.

realize as seguintes operações:

a) Leia o conteúdo do arquivo animais.json.

b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

d) Modifique o habitat de um animal existente no array de animais.

e) Remova um animal do array de animais.

f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().

g) Imprima no console o objeto JavaScript resultante das operações.
*/
function e4(){
    const zoo = require("./animais.json");

    console.log(zoo);
    
    zoo.animais.push({
        id: 4,
        nome:'Bode',
        tipo:'Mamífero',
        habitat: 'Nordeste'
    });

    zoo.animais.some(function(animal) {
        if(animal.nome === 'Leão'){
            animal.habitat = 'Nordeste';
            return true
        }
    });

    const cobra = zoo.animais.find(animal => animal.nome === 'Cobra');
    if (cobra) {
        cobra.habitat = 'Terra';
    }


    
    console.log(zoo.animais);

}
e4();
console.log();

/*

*/
function e5(){
    const pessoaOriginal = {
        id: 1,
        nome: "Alice",
        idade: 30
    }

    function clonar(pessoa){
        return JSON.parse(JSON.stringify(pessoa));
    }

    const pessoaAlterada = clonar(pessoaOriginal);
    pessoaAlterada.idade = 5;

    console.log(pessoaOriginal);
    console.log(pessoaAlterada);

}
e5();
console.log();