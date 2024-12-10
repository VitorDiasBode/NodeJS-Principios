const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
    if(lista[0].includes(aluno)){
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem média ${mediaAluno}`);
    }else{
        console.log(`${aluno} não existe na lista`);
    }
}

for(i=0; i<alunos.length; i++){
    exibeNomeENota(alunos[i]);
}

exibeNomeENota('Carlos');
