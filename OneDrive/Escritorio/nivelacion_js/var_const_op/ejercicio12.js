//Declara dos variables enteras y realiza operaciones de desplazamiento a la izquierda y derecha
// en una de ellas, y operaciones AND, OR y XOR entre ambas.

function ejecutarEjercicio12() {
    var num1 = 8;
var num2 = 4;
var desplazamientoIzquierda = num1 << 1; // Desplazamiento a la izquierda
var desplazamientoDerecha = num2 >> 1; // Desplazamiento a la derecha
var and = num1 & num2; // Operación AND
var or = num1 | num2; // Operación OR
var xor = num1 ^ num2; // Operación XOR
console.log("Desplazamiento a la izquierda de num1:", desplazamientoIzquierda);
console.log("Desplazamiento a la derecha de num2:", desplazamientoDerecha);
console.log("Operación AND entre num1 y num2:", and);
console.log("Operación OR entre num1 y num2:", or);
console.log("Operación XOR entre num1 y num2:", xor);
}