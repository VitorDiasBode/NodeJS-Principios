
//Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. 
//Em seguida, exiba o tipo de cada variável no console.
function e1(){
    let nome = 'Keith';
    let ativo = false;
    let nivel = 5;

    console.log(typeof nome);
    console.log(typeof ativo);
    console.log(typeof  nivel);

}

//Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. 
//Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. 
//Por fim, imprima os resultados obtidos no console.
function e2(){
    let nome = 'Keith';
    let sobrenome = 'Honeywell';
    let nomeCompleto = nome+' '+sobrenome;
    let nomeCompletoTemplateString = `${nome} ${sobrenome}`

    console.log(`esse é o ${nomeCompleto}, ele faz algo`);
    console.log(`esse é o ${nomeCompletoTemplateString}, ele faz algo`);
}

//Declare duas variáveis, uma contendo um número e outra contendo uma string. 
//Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
function e3(){
    let nome = 'Thena';
    let nivel = 4;
    let mensagem = `A ${nome} é nível ${nivel}`; 

    console.log(mensagem);
}

function inFunction(){
    console.log('vai dar certo ?');
    anotherFunction();
    function anotherFunction(){
        console.log('deu certo');
    }
}

//Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável.
//Imprima ambos os valores no console após atribuí-los.
function e4(){
    let nivel = 1;
    console.log(`antes de lutar com o goblin era nível ${nivel}`);
    nivel += 1;
    console.log(`depois de lutar com o goblin foi nível ${nivel}`);
}

//Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. 
//Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. 
//Faça o mesmo processo utilizando let e compare com os resultados anteriores.
function e5(){
    var nome = 'Keith';
    if (1>0){
        var nome = 'Thena';
        console.log(nome);
    }
    console.log(nome);

    let classe = 'Bruxo';
    if (1>0){
        let classe = 'Paladina';
        console.log(classe);
    }
    console.log(classe);
}

//Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir 
//uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.
function e6(){
    let estaChovendo = true;
    estaChovendo? console.log('leva guarda chuva'):console.log('não leva guarda chuva');

    if(estaChovendo){
        console.log('leva guarda chuva');
    }else{
        console.log('não leva guarda chuva');
    }
}