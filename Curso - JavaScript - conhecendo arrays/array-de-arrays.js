const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];
const lista = [alunos, medias]

lista[0] = lista[0].concat(['Keith', 'Thena']);
lista[1] = lista[1].concat([10, 10]);

console.log(`
    a aluna da posição 1 da lista é: ${lista[0][4]}
    a nota dessa aluna é: ${lista[1][4]}`
);

console.log(lista)