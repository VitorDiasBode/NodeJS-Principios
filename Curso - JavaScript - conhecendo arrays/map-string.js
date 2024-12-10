const nomes = [
    'BeHoLdEr xAnThAr',
    'mInD FlAyEr qUraKh',
    'ReD DrAGon thEalxis',
    'LiCh MorTrIvE',
    'HoBGoBlIn KrAsThak',
    'gElAtInoUs cUBe lUglOr'
];


function padraoLetrasMaiusculas(nomes){
    const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

    return nomesPadronizados;
}

function padraoIniciaisMaiusculas(nomes){
    const iniciaisMaiusculas = (nomeCompleto) => {
        const listaNomes = nomeCompleto.toLowerCase().split(' ');
        return listaNomes.map(palavra => palavra.at(0).toUpperCase() + palavra.slice(1)).join(' ');
    }

    const nomesPadronizados = nomes.map(iniciaisMaiusculas);

    return nomesPadronizados;
}

console.log(padraoIniciaisMaiusculas(nomes));
