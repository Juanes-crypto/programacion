function ejecutarEjercicio8() {
    // Crea una función que determine si una persona puede conducir
// Debe comprobar: edad >= 18 && tieneCarnet && !estaInhabilitado

let edadStr= prompt("Ingrese su edad: ");
let edad = Number(edadStr); // Convierte la entrada a número
let carnet = prompt("¿Tiene carnet de conducir? (si/no): ");
let inhabilitado = prompt("¿Está inhabilitado para conducir? (si/no): ");
let tieneCarnet = carnet.toLowerCase() === "si"; // Convierte la respuesta a minúsculas y compara con "si"
let estaInhabilitado = inhabilitado.toLowerCase() === "si"; // Convierte la respuesta a minúsculas y compara con "no"
function puedeConducir(edad, tieneCarnet, estaInhabilitado) {
    if (edad >= 18 && tieneCarnet && !estaInhabilitado) { // Verifica si cumple con las condiciones
        console.log("Puede conducir"); // Si cumple, muestra este mensaje
    } else {
        console.log("No puede conducir");
    }
}
puedeConducir(edad, tieneCarnet, estaInhabilitado); // Llama a la función con los argumentos 
}