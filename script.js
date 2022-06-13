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


