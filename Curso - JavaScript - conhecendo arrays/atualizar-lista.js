const listaEstudantes = [ "Ana","Bruno","Carla","Diego","Eduarda", "Fernando"];
listaEstudantes.splice(1, 2, 'Rodrigo', 'Antonio');

console.log(listaEstudantes);


const animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']

animaisDoAquario.splice(1, 0, 'sardinha') //['baleia', 'sardinha', 'polvo', 'golfinho', 'tubarão']
animaisDoAquario.splice(3, 2, 'atum')     //['baleia', 'sardinha', 'polvo', 'atum']

console.log(animaisDoAquario)