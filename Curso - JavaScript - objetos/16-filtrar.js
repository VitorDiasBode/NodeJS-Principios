const estudantes = require("./estudantes.json");

function filtraPorPropriedade(lista, propriedade){
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

const listaFiltrada = filtraPorPropriedade(estudantes, 'cep');
console.log(listaFiltrada[0]);
console.log(estudantes[0]);

const listaDeUsuarios = [
    { id: 1, nome: 'Alice', idade: 25 },
    { id: 2, nome: 'Bob', idade: 30 },
    { id: 3, nome: 'Charlie', idade: 22 }
];
  