const listaCPFs = ['12312312312', '123234435345'];

const infoPessoas = ['nome', 'José Silva', 'idade', 32];

const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
};

console.log(`o nome do estudante é ${estudante.nome}`);
console.log(`os três primeiros digitos do CPF são ${estudante.cpf.substring(0, 3)}`);
