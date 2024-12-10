const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante);
console.log(typeof stringEstudante);

const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof objEstudante);


const frodo = {
    nome: "Frodo Bolseiro",
    idade: 50,
    raça: "Hobbit",
    classe: "Aventureiro",
    alinhamento: "Leal Bom",
    cidade: "Hobbiton",
    estado: "Condado",
    amigos: ["Samwise Gamgee", "Meriadoc Brandebuque", "Peregrin Tûk"],
    inimigos: ["Sauron", "Saruman", "Orcs"],
    equipamento: {
        arma: "Ferroada",
        armadura: "Camiseta de Mithril",
        itemEspecial: "O Um Anel"
    },
    missao: "Destruir o Um Anel",
    pontosDeVida: 20,
    nivel: 5,
    habilidades: ["Furtividade", "Resistência", "Coragem"],
    altura: 1.2, // metros
    peso: 40, // kg
    dataNascimento: "22 de setembro de 2968 T.E.",
    corDosOlhos: "Azul",
    corDoCabelo: "Castanho",
    genero: "Masculino",
    status: "Vivo"
};

const frodoClone = JSON.parse(JSON.stringify(frodo));

// Verificando se o clone é independente
frodoClone.nome = "Frodo Clone";
frodoClone.equipamento.arma = "Espada Longa";

console.log();
console.log("Original:", frodo.nome);
console.log("Clone:", frodoClone.nome);
