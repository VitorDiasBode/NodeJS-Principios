const estudante = {
    nome: 'Frodo Bolseiro',
    idade: 50, 
    cpf: '123.456.789-00', 
    turma: 'Comitiva do Anel',
    bolsista: false,
    telefones: ['(11) 98765-4321', '(11) 91234-5678'],
    endereco: [{
        rua: 'Bolsão',
        numero: 1, 
        complemento: 'Condado, Hobbiton, Terra-Média'
    }]
};

estudante.endereco.push({
    rua: 'Valfenda',
    numero: 0,
    complemento: 'Casa de Elrond, Refúgio dos Elfos'
});

console.log(estudante.endereco[0]);
console.log(estudante.endereco[1]);
