const estudantes =  require("./estudantes");

function buscarInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor) === true);
}

let estudanteEncontrado = buscarInformacao(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado)

estudanteEncontrado = buscarInformacao(estudantes, 'telefone', '4733865848');
console.log(estudanteEncontrado)