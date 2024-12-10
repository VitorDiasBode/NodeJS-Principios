/*
1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
*/
function e1(){
    const valores = [42, "Olá, mundo!", true, 3.14, null, { nome: "Alice" }, [1, 2, 3], undefined, false, "JavaScript"];
    for (let indice=0; indice < valores.length; indice++){
        console.log(`indice ${indice} valor ${valores[indice]}`);
    }

    valores.forEach((elemento, indice) => {console.log(`Indice: ${indice}, Valor: ${elemento}`);});

}

e1();

/*
2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática.
Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos,
imprimindo o resultado da operação no console.
*/
function e2(){
    const numeros = [60, 7, 15, 22, 8, 19, 42, 11, 5, 28];

    function executaOperacaoEmArray(array, funcao, parametros){
        array.map( (valor) => funcao(valor, parametros));
    }

    function multiplicar10(valor) {
        const resultado = valor*10;
        console.log(`o valor ${valor} * 10 é igual a ${resultado}`);
        return resultado
    }

    function porcentagem(valor, total) {
        const resultado = (valor*100)/total;
        console.log(`o valor ${resultado.toFixed(2)}% de ${total}`);
        return resultado
    }
    
    executaOperacaoEmArray(numeros, multiplicar10);
    executaOperacaoEmArray(numeros, porcentagem, 600)
}
e2();

/*
3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. 
Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
*/
function e3(){
    const numeros = [3, 7, 15, 22, 8, 19, 42, 11, 5, 28];

    function buscaValor(lista, valorBuscado){
        for(let i = 0; i < lista.length; i++){
            if(lista[i] === valorBuscado){
                return i;
            }
        }
        return -1;
    }
    // numeros.map((valor) => valor === valorBuscado ? console.log(`${valorBuscado} está na posição ${numeros.indexOf(valor)}`) : console.log(`${valorBuscado} não foi encontrado`));

    console.log(buscaValor(numeros, 22));
    console.log(buscaValor(numeros, 3));
    console.log(buscaValor(numeros, 8));
    console.log(buscaValor(numeros, 27));
}
e3();

/*
4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. 
Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. 
Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, 
por exemplo Aluno não encontrado.
*/
function e4(){
    const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
    ];

    const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
    ];
    
    const nomesTurmaC = [
    'Luffy',
    'Zoro',
    'Nami'
    ]

    buscarAluno('João Silva', [nomesTurmaA, nomesTurmaB, nomesTurmaC]);
    buscarAluno('João ', [nomesTurmaA, nomesTurmaB, nomesTurmaC]);
    buscarAluno('Nami', [nomesTurmaA, nomesTurmaB, nomesTurmaC])

    function buscarAluno(nomeBuscado, listaDeTurmas){
        let todasAsTurmas = [];
   
        for(let turma of listaDeTurmas){ 
            todasAsTurmas = todasAsTurmas.concat(turma)
        };

        const encontrado = Boolean(todasAsTurmas.find((nome) => nome === nomeBuscado));
        encontrado === true ? console.log(`${nomeBuscado} foi encontrado`) : console.log(`${nomeBuscado} não foi encontrado`) 
    
    }

}
e4();

/*
5 - Considere um array de números inteiros.
Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. 
Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.
*/
function e5(){
    const numeros = [6, 9, 12, 15, 18, 21];
    numeros.forEach( function(numero){
        numero = numero*3
        console.log(`${numero} foi calculado`)
        return numero;
    });

    console.log(numeros.indexOf(18));
}
e5();