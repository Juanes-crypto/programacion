// Crea una función que reciba un número n y use un loop for para:
// 1. Calcular la suma de todos los números de 1 a n
// 2. Calcular el factorial de n
function ejecutarEjercicio3() {
let n = Number(prompt("digite un numero:"));

let suma = 0; // Inicializa la suma en 0
let factorial = 1; // Inicializa el factorial en 1

for (let i = 1; i <= n; i++) {//porngo menor igual para que incluya el numero n al final.
    suma += i; // Suma el valor actual de i a la suma
    factorial *= i; // Multiplica el factorial por el valor actual de i
}

console.log("La suma de los números de 1 a " + n + " es: " + suma);
console.log("El factorial de " + n + " es: " + factorial);
}
