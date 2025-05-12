//Crea una constante llamada **`pi`** y asígnale el valor de π (3.14159). 
//Luego, crea dos variables, **`radio`** y **`area`**
// calcula el área de un círculo usando la fórmula **`area = pi * radio * radio`**.

function ejecutarEjercicio1() {
    const pi = 3.14159;
let radio = Number(prompt("digite el radio: "));
radio *= radio;
console.log("radio elevado al cuadrado = ", radio);
let A = pi*radio;
console.log("area del circulo: ", A)
}