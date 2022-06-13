//reduce
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