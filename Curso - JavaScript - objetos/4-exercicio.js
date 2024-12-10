/*
1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. 
O objeto deve conter as seguintes propriedades:

titulo (string): título do livro.
autor (string): nome do autor do livro.
anoPublicacao (number): ano de publicação do livro.
genero (string): gênero do livro.
No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.
*/
function novoLivro(_titulo, _autor, _anoPublicacao, _genero){
    const livro = {
        titulo: _titulo,
        autor: _autor,
        anoPublicacao: _anoPublicacao,
        genero: _genero,
    }

    livro.idadePublicacao = new Date().getFullYear() - livro.anoDePublicacao;

    livro.mostrarDetalhes = "Detalhes do Livro:\n" +
                        "Título: " + livro.titulo + "\n" +
                        "Autor: " + livro.autor + "\n" +
                        "Ano de Publicação: " + livro.anoDePublicacao + "\n" +
                        "Gênero: " + livro.genero + "\n" +
                        "Idade de Publicação: " + livro.idadePublicacao + " anos";


    return livro;

}
console.log(novoLivro('Senhor Dos Anéis, Comitiva do Anel', 'J.R.R Tolkien', 1950, 'Fantasia'));
console.log(novoLivro('Senhor Dos Anéis, As Duas Torres', 'J.R.R Tolkien', 1951, 'Fantasia'));
console.log(novoLivro('Senhor Dos Anéis, O Retorno Do Rei', 'J.R.R Tolkien', 1952, 'Fantasia'));

/*
2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). 
Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. 
Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.
Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.
*/
function e2(){
    const anoAtual = new Date().getFullYear();
    const livro = novoLivro('Senhor Dos Anéis, Comitiva do Anel', 'J.R.R Tolkien', 1950, 'Fantasia');

    livro.idadePublicacao = anoAtual - livro.anoPublicacao;

    console.log(livro.mostrarDetalhes);

}
e2();

/*
3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação.
Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.
*/
function e3(){
    const livro = novoLivro('Senhor Dos Anéis, Comitiva do Anel', 'J.R.R Tolkien', 1950, 'Fantasia');
    const infoLivro = Object.keys(livro);

    infoLivro.forEach( (info) => console.log(`${info}: ${livro[info]}`) );

}
e3();

/*
4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.
Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.


*/
function e4(){
    const livro = novoLivro('Senhor Dos Anéis, Comitiva do Anel', 'J.R.R Tolkien', 1950, 'Fantasia');
    // livro.avaliacao = null;
    livro.avaliacao = '5 estrelas';

    if(livro.avaliacao === null){
        livro.avaliacao = '5 estrelas';
    }else{
        console.log(`O livro tem ${livro.avaliacao}`);
    }

}
e4();

/*
5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
Depois altere o gênero do livro para "Aventura".
*/
function e5(){
    const livro = novoLivro('Senhor Dos Anéis, Comitiva do Anel', 'J.R.R Tolkien', 1950, 'Fantasia');
    livro['genero'] = 'Aventura'
    console.log(`o genero de ${livro.titulo} é ${livro.genero}`);
}
e5();

/*
6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação.
Em seguida, exclua a propriedade avaliacao do objeto livro. 
Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.
*/

function e6(){
    const livro = novoLivro('Senhor Dos Anéis, Comitiva do Anel', 'J.R.R Tolkien', 1950, 'Fantasia');
    livro.avaliacao = '5 estrelas'

    // delete livro.avaliacao
    console.log(livro)

}
e6();

