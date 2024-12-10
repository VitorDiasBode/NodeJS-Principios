const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (let indice=0; indice<notas.length; indice++){
    somaDasNotas += notas[indice];
}

console.log(`A média das notas é ${somaDasNotas/4}`);
