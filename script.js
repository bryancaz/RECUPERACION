//Que tal maestro, buena noche el motivo por el que apenas estoy subiendo mis act es porque desde el viernes en la noche
//me quede sin luz en el fraccionamiento y como soy foraneo esta quincena me quede sin ningun peso y apenas hasta hace rato 
//regreso la luz, espero y me comprenda :( 

//Y no le habia podido comentar desde antes por mi cel estaba descargado :(


//MAP
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
//Caso de uso: Necesitamos que filtre solo almuerzos.postre
var almuerzos = [
    {pricipal:'arepa', postre: 'helado'},
    {pricipal:'tacos', postre: 'torta de queso'},
    {pricipal:'pizza', postre: 'galletas'},
    {pricipal:'sushi', postre: 'pastel'},
];
//var platosPrincipales

//for (var i= 0; i < almuerzos.lenght; i++){
// platosPrincipales.psuh(almuerzos[i].principal);
//}

var platosPrincipales = almuerzos.map(function(almuerzos){
    return almuerzos.postre
})

console.log(almuerzos);
console.log(platosPrincipales);

////////////////////////////////////////////////////

//FILTER
//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.


const cervezas = ['tecate', 'corona', 'tecate roja', 'heineken', 'corona negra', 'tecate azul', 'indio', 'carta blanca'];

const result = cervezas.filter(cervezas => cervezas.length > 8);

console.log(result);

////////////////////////////////////////////////////

//FIND
//El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.


const fruteria = [
    { nombre: 'platano', stock: 12 },
    { nombre: 'pepino', stock: 19 },
    { nombre: 'sandia', stock: 20 },
    { nombre: 'jicama', stock: 9 }
];

const totalproducto = fruteria.find(fruta => fruta.nombre === 'jicama');

console.log(resultado); 
var total = [0, 1, 2, 3].reduce(function(a, b) { return a + b; });

////////////////////////////////////////////////////

//REDUCE
//El método reduce ejecuta una función de devolución de llamada "reductor" suministrada por el usuario en cada elemento de la matriz, en orden, pasando el valor de retorno del cálculo en el elemento precedente.

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const valorinicial = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  valorinicial
);

console.log(sumWithInitial);
// total == 10

////////////////////////////////////////////////////

//findIndex
//El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

const arrayone = [10, 120, 10, 15, 15];

const numerolargo = (element) => element > 15;

console.log(array1.findIndex(numerolargo));

////////////////////////////////////////////////////

//REPLACE
//El tipo de array en JavaScript nos proporciona el método splice() que nos ayuda a reemplazar los elementos de un array existente eliminando e insertando nuevos elementos en el índice requerido/deseado.

const texto = 'Habia una vez un perro que solia jugar mucho';

console.log(texto.replace('perro', 'caballo'));


const animal = /perro/i;
console.log(texto.replace(animal, 'rocky'));

////////////////////////////////////////////////////

//HOISTING
//Las declaraciones de funciones antes de ejecutar cualquier otro segmento de código es que permite utilizar una función antes de declararla en el código.
function fullname(fullName) {
    console.log("Hello " + fullName);
}

(function() {
    nombre("Bryan Calzada");

    function nombre(fullName) {
        console.log("Hola " + fullName + ", Maestro, se me fue la luz todo el fin de semana se que vera esto y le queriacomentar que por eso hasta ahorita pude subir mis array");
    }
})();