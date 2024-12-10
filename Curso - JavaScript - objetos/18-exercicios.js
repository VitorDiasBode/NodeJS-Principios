const biblioteca = [
  {
    id: 1,
    titulo: "1984",
    autor: "George Orwell",
    anoPublicacao: 1949
  },
  {
    id: 2,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899
  },
  {
    id: 3,
    autor: "J.R.R. Tolkien",
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    anoPublicacao: 1954
  },
  {
    id: 4,
    titulo: "Sherlock Holmes: O Vale do Medo",
    autor: "Arthur Conan Doyle",
    anoPublicacao: 1915
  },
  {
    id: 5,
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    anoPublicacao: 1945
  }
];

/*
Crie uma função chamada encontrarLivroPorId que receba o id de um livro como parâmetro e retorne o objeto do livro correspondente. 
Se nenhum livro for encontrado, a função deve retornar null.

Utilize a função para encontrar um livro com um id existente e imprima no console as informações do livro encontrado. 
Em seguida, utilize a função para  um liencontrarvro com um id inexistente e imprima no console uma mensagem indicando que o livro não foi encontrado.
*/

function encontrarLivroPorId(livroId, listaLivros) {
  const livroBuscado = listaLivros.find((livro) => livro.id === livroId);
  return livroBuscado ? livroBuscado : null;
}

function e1() {
  console.log(encontrarLivroPorId(1, biblioteca));
  console.log(encontrarLivroPorId(10, biblioteca));

}
e1()
console.log()

const catalogoFilmes = require('./catalogo-de-filmes.json');

function filtrarFilmesPorAno(filtro, listaFilmes) {
  return listaFilmes.filter((filme) => filme.anoLancamento === filtro);
}

function e2() {
  for (i = 0; i < 20; i++) {
    const anoBuscado = new Date().getFullYear() - i;
    const listaDeFilmes = filtrarFilmesPorAno(anoBuscado, catalogoFilmes);
    if (listaDeFilmes.length > 0) {
      console.log(`Filmes do ano ${anoBuscado}`);
      listaDeFilmes.forEach((filme) => console.log(`${listaDeFilmes.indexOf(filme) + 1} - ${filme.titulo}`));
      console.log()
    };

  }
}
e2();
console.log();



/*
Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um novo array contendo apenas os filmes lançados nesse ano.

Utilize a função para filtrar os filmes lançados em um ano específico e imprima no console o array resultante.
Em seguida, refaça a operação com outro ano.

*/

const produtos = require("./produtos.json");

function filtrarOrdenarProdutosPorPreco(valorMaximo, listaDeProdutos) {
  const listaOrdenada = listaDeProdutos.sort(function (produto1, produto2) {
    if (produto1.preco > produto2.preco) {
      return -1
    } else if (produto1.preco < produto2.preco) {
      return 1
    } else {
      return 0
    }
  });

  return listaOrdenada.filter((produto) => produto.preco <= valorMaximo)

}

function e3() {
  filtrarOrdenarProdutosPorPreco(600, produtos).forEach((produto) => console.log(produto));
}
console.log();
e3();

const animais = require('./animais-ficcao.json');

const compararIdadeCrescente = function (criatura1, criatura2) {
  if (criatura1.idade > criatura2.idade) {
    return -1
  } else if (criatura1.idade < criatura2.idade) {
    return 1
  } else {
    return 0
  }
}

const compararIdadeDecrescente = function (criatura1, criatura2) {
  if (criatura1.idade < criatura2.idade) {
    return -1
  } else if (criatura1.idade > criatura2.idade) {
    return 1
  } else {
    return 0
  }
}

function ordenarAnimais(comparacao) {
  return animais.sort(comparacao)
}
function e4() {
  ordenarAnimais(compararIdadeCrescente).forEach((animal) => { console.log(`${animal.nome} ${animal.idade} anos de idade`) });
  console.log('\n');
  ordenarAnimais(compararIdadeDecrescente).forEach((animal) => { console.log(`${animal.nome} ${animal.idade} anos de idade`) });
}
console.log();
e4();

const departamentos = require("./departamentos.json")
function buscarFucnionario(idBuscado) {
  let resultadoDaBusca;

  for (let indiceDepartamento = 0; indiceDepartamento < departamentos.length; indiceDepartamento++) {
    resultadoDaBusca = departamentos[indiceDepartamento].funcionarios.find(funcionario => funcionario.id === idBuscado);
    if (resultadoDaBusca) {
      console.log(`Com o id ${idBuscado} encontrei ${resultadoDaBusca.nome} que é ${resultadoDaBusca.cargo} que é do departamento ${departamentos[indiceDepartamento].nome}`);
      break
    } else if (indiceDepartamento === departamentos.length - 1) {
      console.log(`Com o id ${idBuscado} não encontrei nenhum funcionario`);
    };

  };

}

function e5() {
  buscarFucnionario(202);
  buscarFucnionario(402);
  buscarFucnionario(404);
};

console.log();
e5();