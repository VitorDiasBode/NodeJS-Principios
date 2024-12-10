/*
1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: 
nome e notas. 
Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada.
Utilize as seguintes categorias:

Desempenho excelente: média >= 9
Bom desempenho: 7.5 <= média entre 7.6 e 8.9
Desempenho regular: 6 <= média entre 6 e 7.5
Desempenho insuficiente: média < 6
Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.
*/
const pessoa = {
    nome: "João Silva",
    notas: [8.5, 7.0, 9.2],
    calcularMediaNotas: function(){
        return this.notas.reduce( (soma, nota) => soma + nota,0) / this.notas.length;
    },
    classificarDesempenho: function(){
        const media = this.calcularMediaNotas();
        if(media < 6){
            return 'Desempenho insuficiente';
        }else if( media <= 7.5 ){
            return 'Desempenho regular';
        }else if( media <= 8.9 ){
            return 'Bom desempenho';
        }else{
            return 'Desempenho Excelente';
        }
    }
};

function e1(){
    console.log( pessoa.classificarDesempenho() );

}
e1();

/*
2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

marca (string): marca do carro.
modelo (string): modelo do carro.
ano (number): ano de fabricação do carro.
cor (string): cor do carro.
Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.

Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o 
seu valor.
*/

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Preto"
};
function e2(){
    for(propriedade in carro){
         console.log(`${propriedade.toUpperCase()}: ${carro[propriedade]}`);
    };

    Object.defineProperties(carro, {
        tipoCombustivel : {
            value: 'Gasolina',
            writable: true,
            enumerable: true
        },
        quilometragem: {
            value : 15000,
            writable : true,
            enumerable: true
        }
    });
    carro.kmRodados = 5000;

    console.log();
    for(propriedade in carro){
        console.log(`${propriedade.toUpperCase()}: ${carro[propriedade]}`);
    };


};
console.log();
e2();

/*
3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), 
não pode ser ligado novamente e vice-versa.
obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
Em seguida, faça o seguinte:

Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
Chame o método obterDetalhes e imprima no console a string retornada.
*/

function e3(){
    Object.defineProperties(carro, {
        ligado:{
            value: false,
            enumerable: true,
            writable: true
        },
        ligar:{
            value: function(){
                if(!this.ligado){
                    console.log(`O carro está ligado`);
                    this.ligado = true;
                };
            
            },
            enumerable:true,
            writable: true
        },
        desligar:{
            value: function(){
                if(this.ligado){
                    console.log(`O carro está deligado`);
                    this.ligado = false;
                }
            }
        },
        mostrarDetalhes:{
            value: function() {
                Object.keys(this).forEach((chave) => {
                    if (typeof this[chave] !== 'function' ){
                        console.log(`${chave.toUpperCase()}: ${this[chave]}`)
                    };
                
                } );
                
            },
            enumerable:true,

        }

    })

};

console.log();
e3();

carro.ligar();
carro.desligar();
carro.mostrarDetalhes();

/*
4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável,
para que ela não seja listada ao percorrer as propriedades do objeto.

Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.

Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.

Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.


*/
function e4(){
    Object.defineProperty(carro, 'placa', {value:'ABC-123'});
    Object.keys(carro).forEach( (chave) => console.log(chave))

    console.log(`A placa é ${carro.placa}`)
}
console.log();
e4();

/*
5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:

marca (string): marca do novo carro.
modelo (string): modelo do novo carro.
ano (number): ano de fabricação do novo carro.
cor (string): cor do novo carro.
Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e 
adicione as propriedades do objeto carroNovo.

Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.

Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.


*/
function e5(){
    const carroNovo = {
        marca: "Honda",
        modelo: "Civic",
        ano: 2024,
        cor: "Azul",
        temAsas:false
    };

    // const carroComNovosDetalhes = {...carro, ...carroNovo};
    const carroComNovosDetalhes = {...carroNovo, ...carro};
    console.log(carroComNovosDetalhes);
    carroComNovosDetalhes.mostrarDetalhes();
}
console.log();
e5();