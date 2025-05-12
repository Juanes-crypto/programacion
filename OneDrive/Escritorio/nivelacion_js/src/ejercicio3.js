// Crea un objeto persona con const
// Intenta modificar una propiedad del objeto
// Intenta reasignar el objeto completo
// Explica qué sucede en cada caso
function ejecutarEjercicio3() {
const persona = { //se crea el objeto persona
    nombre:  "Juan",//se crean sus atributos y se les agregan
    edad:  18,     //sus valores
    ciudad:  "Medellin"
}
persona.edad = 100;//pongo el nombre del objeto, seguido de un punto
persona.nombre = "Pedro";//con el punto accedo al atributo y le asigno un nuevo valor
console.log(persona) //muestro como me quedo el objeto en la consola
}