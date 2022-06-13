//FILTER
//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.


const cervezas = ['tecate', 'corona', 'tecate roja', 'heineken', 'corona negra', 'tecate azul', 'indio', 'carta blanca'];

const result = cervezas.filter(cervezas => cervezas.length > 8);

console.log(result);