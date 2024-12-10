function calculaMedia(listadeNotas){
    const somaDasNotas = listadeNotas.reduce( (acumulador, nota) => acumulador+nota, 0)
    return somaDasNotas/listadeNotas.length;
}

console.log(calculaMedia([1,1,1,1]));
console.log(calculaMedia([2,9]));
console.log(calculaMedia([9,8,12]));