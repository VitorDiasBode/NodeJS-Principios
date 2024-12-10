/*
Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos.
 Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.
*/
function e1(){
    const arrayEsparso = [];

    arrayEsparso[1] = 'Elemento 1';
    arrayEsparso[3] = 'Elemento 3';
    arrayEsparso[7] = 'Elemento 7';

    console.log(arrayEsparso);
    console.log(arrayEsparso.length);
}
e1();

/*
Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição
(índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.
*/
function e2(){
    const classes  = ['guerreiro', 'feiticeiro', 'bruxo', 'clerigo', 'druida']
    classes[0] = 'mago';

    console.log(classes);
}
e2();

/*
Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). 
Imprima no console os itens presentes no array para verificar se os números foram adicionados. 
Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. 
Imprima no console o array atualizado para verificar a mudança.
*/
function e3(){
    const meuArray = [];
    meuArray.push(8);
    meuArray.push(3);
    meuArray.push(32);

    console.log(meuArray);

    meuArray[0] = 2*meuArray[0];

    console.log(meuArray);
}
e3();

/*
Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). 
Adicione três números inteiros ao array e, em seguida, exiba o array resultante.
*/
function e4(){
    const meuArray = [];
    meuArray.push(8);
    meuArray.push(3);
    meuArray.push(32);

    console.log(meuArray);
}
e4();

/*
Desenvolva um programa em Node.js que simule uma clínica veterinária. 
Crie um array vazio chamado clinica que representará a fila de animais na clínica. 
Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. 
Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
*/
function e5(){
    const listaDeAnimais = [];
    listaDeAnimais.push('Chopper');
    listaDeAnimais.push('Furous');
    listaDeAnimais.push('Zero');

    console.log(listaDeAnimais);

    listaDeAnimais.pop();
    listaDeAnimais.pop();
    listaDeAnimais.pop();

    console.log(listaDeAnimais);

}

e5();
