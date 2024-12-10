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
    }],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase; 
    }
};

console.log(estudante.estaAprovado(7));
console.log(estudante.estaAprovado(8));
