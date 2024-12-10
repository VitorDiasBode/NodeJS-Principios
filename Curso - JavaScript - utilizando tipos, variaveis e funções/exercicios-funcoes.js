/*
Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. 
Em seguida, chame a função e exiba a saudação no console.
*/
function e1(){
    const saudacao = (nome) => `Saudações ${nome}`
    console.log(saudacao('Keith'));
}
e1();

/*
Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). 
Imprima o resultado no console.
*/
function e2(){
    const maiorDeIdade = function(idade) {
        if(idade >= 18){
            return true;
        }
        else{
            return false;
        }
    }

    maiorDeIdade(22) ? console.log('Ele é maior de idade') : console.log('Ele é menor de idade');
}
e2();

/*
Crie uma função que receba uma string e verifique se é um palíndromo 
(uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse().
Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
*/
function e3(){
    function verificarPalindromo(palavraOriginal){
        const palavraInvertida = palavraOriginal.split('').reverse().join('');
        return palavraOriginal === palavraInvertida;
    }

    const palavra = "arara";
    console.log(`${palavra} é um palíndromo? ${verificarPalindromo(palavra)}`);
}
e3();
/*
Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. 
Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. 
Imprima o maior valor no console.
*/
function e4() {
    function determinarMaiorNumero(numero1, numero2, numero3){
        let maiorNumero;

        numero1 > numero2 ? maiorNumero = numero1 : maiorNumero = numero2
        if(numero3 > maiorNumero){ 
            maiorNumero = numero3
        }

        return maiorNumero
    }

    console.log(determinarMaiorNumero(2,3,4));
    console.log(determinarMaiorNumero(2,5,4));
    console.log(determinarMaiorNumero(6,3,4));

}
e4();

/*
Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. 
A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
*/
function e5(){
    const calculaPotencia = (base, expoente) => Math.pow(base, expoente);

    console.log(calculaPotencia(2, 4));
    console.log(calculaPotencia(4, 2));
    console.log(calculaPotencia(4, 4));
}
e5();