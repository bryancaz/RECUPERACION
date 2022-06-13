//replace
//El tipo de array en JavaScript nos proporciona el método splice() que nos ayuda a reemplazar los elementos de un array existente eliminando e insertando nuevos elementos en el índice requerido/deseado.

const texto = 'Habia una vez un perro que solia jugar mucho';

console.log(texto.replace('perro', 'caballo'));


const animal = /perro/i;
console.log(texto.replace(animal, 'rocky'));