const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
};

console.log(estudante);
estudante.telefone = '3284849595';
console.log(estudante);

estudante.nome = 'José Souza';
console.log(estudante); 

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}

delete objPersonagem.aliado;
delete objPersonagem['aliado']
console.log(objPersonagem.aliado);
console.log(objPersonagem);