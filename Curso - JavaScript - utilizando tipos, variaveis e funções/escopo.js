let estudante = "Mariana";

if ( 1>0 ) {   
    let t1 = 1;
    var t2 = 2;
    estudante = "Ana";
    console.log(estudante);
}

console.log(estudante);

//erro por que t1 é uma variavel com let e nao pode ser acessada fora do escopo
console.log(t1, t2);