//hoisting
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