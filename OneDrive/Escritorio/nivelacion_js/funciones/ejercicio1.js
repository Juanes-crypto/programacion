// 1. Crea una función usando declaración de función
// 2. Crea la misma función usando expresión de función
// 3. Explica las diferencias en el hoisting de ambas

// Declaración de función
function ejecutarEjercicio1 () {
function crearFuncionDeclaracion(num) {
    console.log("haciendo pruevas..", num);
    num += 6;
    console.log("metiendole cacumen...", num);
    num *= 2;
    console.log("saliendo de la matrix..", num)
    num -= 6;
    console.log("Ultimos ajustes")
    console.log("------------")
    num /= 2;
    console.log("Numero de la suerte: ", num);
}
let num = Number(prompt("piense en un numero: (se tiene que acordal de el)"));

// // Expresión de función
// // aca la diferencia es que se le asigna a una variable una funcion
// let crearFuncionExpresion = function(num) {
//     num += 6;
//     num /= 2;
//     num = -num;
//     console.log("el resultado final es: ", num);
// };

// let num = Number(prompt("piense en un numero: "));

crearFuncionDeclaracion(num); // Llama a la función declarada
console.log("Ahora restele el mismo numero que penso..");
console.log("Le a puesto a que le dara como resultado 3 😎")
}