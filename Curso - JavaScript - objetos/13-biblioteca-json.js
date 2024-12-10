const novoLivro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    genero: "Romance",
    ano_publicacao: 1899
};

const biblioteca = require("./biblioteca.json");
biblioteca.push(novoLivro);

const bibliotecaString = JSON.parse(JSON.stringify(biblioteca));

console.log(typeof(biblioteca))
console.log(biblioteca)
