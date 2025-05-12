// 1. Crea una función usando declaración de función
// 2. Crea la misma función usando expresión de función
// 3. Explica las diferencias en el hoisting de ambas

// Declaración de función
function ejecutarEjercicio1 () {
function crearFuncionDeclaracion(num) {
    num += 6;
    num /= 2;
    num = -num;
    console.log("el resultado final es: ", num);
}

// Expresión de función
// aca la diferencia es que se le asigna a una variable una funcion
let crearFuncionExpresion = function(num) {
    num += 6;
    num /= 2;
    num = -num;
    console.log("el resultado final es: ", num);
};

let num = Number(prompt("piense en un numero: "));

crearFuncionDeclaracion(num); // Llama a la función declarada
crearFuncionExpresion(num); // Llama a la función expresada
}