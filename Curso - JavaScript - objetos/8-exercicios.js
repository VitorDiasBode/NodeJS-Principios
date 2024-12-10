
const pessoa = {
    nome:'Keith',
    idade: 23,
    solteiro: true,
    hobbies: ['contar histórias', 'dançar', 'ler'],
}

function mostrarInfoPessoa(pessoa){
    console.log('\n');
    Object.keys(pessoa).forEach( function(info){
        if (typeof pessoa[info] === 'object'){
            console.log(`\n${info.toUpperCase()}:`);
            Object.keys(pessoa[info]).forEach( (subInfo) => mostarChavesObjeto(subInfo, pessoa[info]) );

        }else{ mostarChavesObjeto(info, pessoa) };
    
    } );

    function mostarChavesObjeto(info, objeto){
        console.log(`${info.toLocaleUpperCase()}: ${objeto[info]}`);
    }

}

/*
1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. 
Este objeto deve ter as seguintes propriedades:

nome (string): Nome da pessoa.
idade (number): Idade da pessoa.
solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
hobbies (array): Lista de hobbies da pessoa.
Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, 
incluindo o tipo de dado de cada propriedade.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.

Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.
*/
function e1(){
    mostrarInfoPessoa(pessoa);
}
e1();

/*
2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, 
com as seguintes subpropriedades:

rua (string): nome da rua.
cidade (string): nome da cidade.
estado (string): nome do estado.
Preencha as subpropriedades do objeto endereco com valores fictícios.

Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, 
são exibidas corretamente no console.


*/
function e2(){
    pessoa.endereco = {
        rua: 'Caminho do Carvalho',
        cidade: 'Silverymoon', 
        estado: 'Silver Marches'
    };

    mostrarInfoPessoa(pessoa);
}
e2();

/*
3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e 
conter as seguintes propriedades:

nome (string): nome da pessoa.
idade (number): idade da pessoa.
cidade (string): cidade de residência da pessoa.
Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.

a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.

b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.

c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.

d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.

Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.


*/

const pessoas = [
    {
        nome: 'Frodo Bolseiro',
        idade: 50,
        cidade: 'Hobbiton' // Terra-Média, Senhor dos Anéis
    },
    {
        nome: 'Aragorn',
        idade: 87, // Idade aproximada no início da história
        cidade: 'Valfenda' // Terra-Média, Senhor dos Anéis
    },
    {
        nome: 'Monkey D. Luffy',
        idade: 19,
        cidade: 'Fuschia Village' // East Blue, One Piece
    },
    {
        nome: 'Roronoa Zoro',
        idade: 21,
        cidade: 'Shimotsuki Village' // East Blue, One Piece
    },
    {
        nome: 'Drizzt Do\'Urden',
        idade: 200, // Aproximada, depende do período da história
        cidade: 'Menzoberranzan' // Underdark, Forgotten Realms
    },
    {
        nome: 'Elminster Aumar',
        idade: 1200, // Aproximada
        cidade: 'Shadowdale' // Forgotten Realms
    }
];

function filtrarPorCidade(pessoas, cidadeFiltro ){
    return pessoas.filter( (pessoa) => pessoa.cidade === cidadeFiltro );
}

function e3(){
    pessoas.forEach((pessoa) => mostrarInfoPessoa(pessoa));
    const novaPessoa = {
        nome: 'Samwise Gamgee',
        idade: 38, // Idade aproximada no início da história de O Senhor dos Anéis
        cidade: 'Hobbiton' // Terra-Média, lar de Sam
    };
    
    
    pessoas.push(novaPessoa);

    filtrarPorCidade(pessoas, 'Hobbiton').forEach( (pessoa) => mostrarInfoPessoa(pessoa) );
}
e3();

/*
Crie um objeto chamado calculadora que terá os seguintes métodos:

soma: uma função que aceita dois parâmetros e retorna a soma deles.
subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero,
retornando uma mensagem apropriada nesse caso.

a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.
b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a 
média aritmética dos valores.
c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.
*/

const calculadora = {
    soma: function(numero1, numero2){
        return numero1+numero2;
    },
    subtracao: function(numero1, numero2){
        return numero1 - numero2;
    },
    multiplicacao: function(numero1, numero2){
        return numero1 * numero2;
    },
    divisao: function(numero1, numero2){
        return numero2 !== 0 ? numero1 / numero2 : 'impedida por conter zero';  
        // if (numero2 !== 0){
        //     return numero1 / numero2;
        // }else{ 
        //     return 'Divisão por zero não é permitida';
        // }
    },
    calcularMedia: function(numeros){
        return numeros.reduce( (acumulador, valorAtual) => acumulador + valorAtual, 0) / numeros.length;
    }
}
function e4(){
    console.log(`\n`);
    console.log(`A soma foi ${calculadora.soma(1,5)}`);
    console.log(`A subtração foi ${calculadora.subtracao(1,5)}`);
    console.log(`A multiplicação foi ${calculadora.multiplicacao(1,5)}`);
    console.log(`A divisão foi ${calculadora.divisao(1,5)}`);
    console.log(`A divisão foi ${calculadora.divisao(0,3)}`);
    console.log(`A média foi ${calculadora.calcularMedia([1,5])}`);
}
e4();

/*
5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

titular: uma string representando o titular da conta.
saldo: um número representando o saldo da conta.
depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. 

Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:

nome: uma string representando o nome do cliente.
conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.

Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.
*/
const contaBancaria = {
    titular: 'Bilbo',
    saldo: 150000,
    depositar: function(valor){ 
        this.saldo += valor
        let teste = true;
    },
    sacar: function(valor) {
        console.log(teste);
        if(this.saldo >= valor){
            this.saldo -= valor;
        }else{
            console.log(`Saldo inválido`);
        }

    },
    mostrarSaldo: function() {
        console.log(`${this.titular}:\nSaldo: ${this.saldo}`);
    }
}
function e5(){
    contaBancaria.depositar(60000);
    contaBancaria.sacar(500);
    contaBancaria.mostrarSaldo();
}
e5();

function teste(){
    // Object.defineProperty(pessoa, 'arma', {value: 'Sting', enumerable:true});
    pessoa.arma = 'Sting'
    mostrarInfoPessoa(pessoa);
}
teste();
