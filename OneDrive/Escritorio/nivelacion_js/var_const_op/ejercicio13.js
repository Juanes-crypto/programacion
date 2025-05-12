//Declara un objeto con propiedades **`nombre`** y **`apellido`**. 
//Utiliza la asignación por desestructuración para extraer y mostrar ambos valores en variables separadas.

function ejecutarEjercicio13() {
    let persona = {
    nombre: "Juan",
    apellido: "Pérez"
};
// Asignación por desestructuración
let { nombre, apellido } = persona; //declaro las variables y le asigno el valor de las propiedades del objeto
console.log(`Nombre: ${nombre}, Apellido: ${apellido}`); //imprimo el mensaje

}