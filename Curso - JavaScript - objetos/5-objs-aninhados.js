const estudante = {
    nome: 'Frodo Bolseiro',
    idade: 97,
    cpf: '1299231922',
    turma: 'Comitiva',
    bolsista: true,
    telefones: ['8712331256', '0954678943'],
};

estudante.endereco = {
    rua: 'Bolsão',
    numero: '54',
    complemento: 'porta verde'
};

console.log(estudante);
console.log(estudante.endereco);
console.log(estudante.endereco.rua);