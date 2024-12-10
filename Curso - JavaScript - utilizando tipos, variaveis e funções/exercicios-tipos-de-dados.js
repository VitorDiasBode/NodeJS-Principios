/*
Crie uma variável contendo uma frase. 
Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
*/
function e1(){
    const frase = "Ah, você sabe, às vezes a vida nos empurra para um caminho tão estreito que parece que não há mais espaço para a risada, para o caos divertido, ou para a simples alegria de uma boa brincadeira, mas é aí que o verdadeiro segredo se revela: quando as coisas ficam difíceis, é a arte da travessura e a leveza da risada que podem transformar até o cenário mais sombrio em algo digno de ser lembrado, e, veja, não estou falando de uma risada qualquer, mas daquela risada pura, aquela que ecoa no coração das pessoas e as faz questionar se realmente o mundo todo precisa ser tão sério, porque, na minha opinião, e, claro, não sou um sábio, mas um sábio nunca diria isso – a seriedade é um veneno para a alma, e o humor, o caos divertido, esse é o antídoto, o que nos lembra que podemos lutar, sim, mas com um sorriso, porque, se a luta é inevitável, pelo menos que sejamos inteligentes o suficiente para torná-la interessante!";
    console.log(`Quantidade de letras: ${frase.length}`);
    console.log(frase.toUpperCase());
}

/*
Declare duas variáveis, uma inicializada com valor null
e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
*/
function e2(){
    const variavelNull = null;
    let variavelUndefined;
    console.log(variavelNull, variavelUndefined);

}

/*
Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes 
tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
*/
function e3(){
    const dano = 35;
    const magia = 'Eldritch Blast';
    const concetracao = false;

    console.log(`Conjurou a magia ${magia}, ${concetracao?'tem concentracao':'não tem concentracao'} e causou ${dano} de dano`);
}

/*
Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e
da string para número. Exiba os tipos de dados resultantes no console.
*/
function e4(){
    const valorString = '10';
    const valorNumber = 10;

    console.log(typeof Number(valorString));
    console.log(typeof String(valorNumber));
}

/*Crie uma variável com uma string e utilize métodos de manipulação de 
strings, como toUpperCase, toLowerCase, slice ou outros, 
para modificar a string original. Exiba os resultados finais no console.
*/
function e5(){
    const frase = 'estudando JavaScript'

    const primeiraLetra = frase[0].toUpperCase();
    console.log(primeiraLetra+frase.substring(1));
}
