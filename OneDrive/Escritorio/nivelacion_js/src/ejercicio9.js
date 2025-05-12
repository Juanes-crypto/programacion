function ejecutarEjercicio9() {
    // Reescribe el siguiente if-else usando el operador ternario
/*
if (edad >= 18) {
    return "Puede votar";
} else {
    return "No puede votar";
}
*/

let edad= Number(prompt("ingrese su edad: "));

let votar = edad>=18 ? 'puede votar' : 'no puede votar';
console.log(votar);
}