
//Evitando colisões em propriedades de objetos
function propriedadesMesmoObjeto(){
    const user = { name: "João" };

    // Definindo identificadores únicos usando Symbol
    const id = Symbol("id");
    const role = Symbol("role");

    // Adicionando propriedades ao objeto com Symbol
    user[id] = 12345;
    user[role] = "admin";

    // Iteração não inclui propriedades com Symbol
    for (let key in user) {
    console.log(key); // Apenas 'name' será exibido
    }

    console.log(user[id]); // 12345
    console.log(user[role]); // "admin"
}
propriedadesMesmoObjeto();