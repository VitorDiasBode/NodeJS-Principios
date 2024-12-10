/*
Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, 
depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, 
considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
*/
function e1(){
    let saldo = 100.00;
    let deposito = 50.0;
    let saque = 50.0;
    let operacao = 'saque';

    operacao === 'saque'? saldo -= saque : saldo += saque;
    
    console.log(saldo);

}
e1();

/*
Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par 
ou ímpar. Exiba o resultado no console.
*/
function e2(){
    const valor = 2;
    valor%2 === 0? console.log("par") : console.log("impar");
}
e2();
/*
Considere uma situação em que você está verificando se um usuário está logado e tem permissão de 
administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular
 essas condições e use o operador AND para verificar se ambas são verdadeiras.
*/
function e3(){
    let logado = true;
    let administrador = true;

    logado === true && administrador === true ? console.log("permitido") : console.log("não permitido");

}
e3();

/*
Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. 
Exiba o resultado no console.
*/
function e4(){
    let aluno = false;
    let professor = false;

    aluno === true || professor === true ? console.log("permitido") : console.log("não permitido");

}
e4();

/*
Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. 
Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas 
condicionais (if, else) para determinar se o usuário pode realizar a compra.
*/
function e5(){
    const idadeMinima = 18;
    let idadeDoUsuario = 22;

    if(idadeDoUsuario >= idadeMinima){
        console.log('Pode realizar a compra');
    }else{
        console.log('Não pode realizar a compra');
    }

}