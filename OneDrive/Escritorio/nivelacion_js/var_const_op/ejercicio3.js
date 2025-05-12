//Declara dos variables **`numero1`** y **`numero2`** 
// con valores numéricos. Utiliza operadores de comparación 
// para verificar si **`numero1`** es mayor que **`numero2`**, menor que **`numero2`**, igual a **`numero2`**, 
// y diferente de **`numero2`**.

function ejecutarEjercicio3() {
    let numero1 = 10;
let numero2 = -10;
console.log(numero1 > numero2);
console.log(numero1 < numero2);
console.log(numero1 == numero2);
console.log(numero1 != numero2);

let prueba = numero1 > numero2  ? 'el primer numero es mayor' : 'el segundo numero es mayor'
console.log(prueba);
let prueba3 = numero1 == numero2  ? 'ambos numeros son iguales' : 'Los numeros son distintos'
console.log(prueba3);
}