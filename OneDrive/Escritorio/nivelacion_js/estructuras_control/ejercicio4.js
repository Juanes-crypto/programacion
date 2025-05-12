// Implementa un juego de "adivina el número" usando:
// 1. Un loop while
// 2. Un loop do-while
// ¿Cuál es la diferencia en el comportamiento?
function ejecutarEjercicio4 () {
console.log("Debes adivinar un número entre 1 y 10");

// Genera un número aleatorio entre 1 y 10
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;//math flor redondea hacia abajo
//por eso se suma 1 al final. y desplaza de 0 y 10 a 1 y 10

let n = Number(prompt("¿Cuál número crees que es?"));

// Bucle while para continuar el juego hasta que el usuario adivine el número
while (n !== numeroAleatorio) { //si n es diferente a numeroAleatorio
    if (n < numeroAleatorio) {
        console.log("El número es mayor. Intenta de nuevo.");// si n es mayor
    } else {
        console.log("El número es menor. Intenta de nuevo.");
    }
    n = Number(prompt("Intenta de nuevo:"));//le da otra oportunidad al usuario. y se repite la iteracion
}

console.log("¡Felicidades! ¡Adivinaste el número!");//solo se ejecuta esta linea si el usuario logra salir del loop adivinando el numero

// do {
//      if (n < numeroAleatorio) {
//         console.log("El número es mayor. Intenta de nuevo.");// si n es mayor
//     } else {
//         console.log("El número es menor. Intenta de nuevo.");
//     }
//     n = Number(prompt("Intenta de nuevo:"));
// } while (n !== numeroAleatorio);
// //el bloque de do siempre se ejecutara una ves, sin importar si es verdadero o falso
// //en el while, la condicion puede NO ejecutarse desde el principio
}