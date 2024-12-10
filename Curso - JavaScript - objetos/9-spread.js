const estudante = {
    nome: 'Frodo Bolseiro',
    idade: 97,
    cpf: '1299231922',
    turma: 'Comitiva',
    bolsista: true,
    telefones: ['8712331256', '0954678943'],
    enderecos: [{
        rua: 'Bolsão',
        numero: 1, 
        complemento: 'Condado, Hobbiton, Terra-Média'
    },{
        rua: 'Valfenda',
        numero: 0,
        complemento: 'Casa de Elrond, Refúgio dos Elfos'
    }]
};

function exibirTelefones(listaTelefones){
    listaTelefones.forEach(telefone => {
        console.log(`O número é ${telefone}`)
    });
}

exibirTelefones(estudante.telefones);
exibirTelefones([...estudante.telefones]);

function spreadParaDadosEnvio(){
    const dadosEnvio = {
        destinatario: estudante.nome,
        ...estudante.enderecos[0]
    }
    console.log(dadosEnvio);

}

function fichas(){
    const fichaMago = {
        nome: "Gandalf",
        classe: "mago"
    };
    
    const equipoMago = {
        cajado: "Cajado de Gandalf",
        capa: "Capa Cinzenta"
    };

    const fichaLadino = {
        nome: "Bilbo Bolseiro",
        classe: "ladino"
    };
    
    const equipoLadino = {
        arma: "Ferroada",
        anel: "Anel do Poder"
    };

    const ladino = {fichaLadino, equipoLadino};
    const mago = {...fichaMago, ...equipoMago};

    mostrarInfoPessoa(ladino);
    console.log(ladino);
    mostrarInfoPessoa(mago);
    console.log(mago);

    const personagens = {...fichaLadino, ...fichaMago};
    console.log(personagens);
  
}
fichas();

function mostrarInfoPessoa(pessoa){
    console.log('\n');
    Object.keys(pessoa).forEach( function(info){
        if (typeof pessoa[info] === 'object'){
            console.log(`\n${info.toUpperCase()}:`);
            Object.keys(pessoa[info]).forEach( (subInfo) => mostarChavesObjeto(subInfo, pessoa[info]) );

        }else{ mostarChavesObjeto(info, pessoa) };
    
    } );

    function mostarChavesObjeto(info, objeto){
        console.log(`${info.toLocaleUpperCase()}: ${objeto[info]}`);
    }

}
