//Declara una variable **`edad`** y asígnale un valor numérico. Utiliza un operador ternario para determinar si 
//la persona es mayor de edad (mayor o igual a 18) o no, e imprime un mensaje adecuado.

function ejecutarEjercicio11() {
    let edad = Number(prompt("ingrese su edad:"));//declaro la variable y le asigno el valor que ingresa el usuario
let mayor = edad>=18 ? "es mayor de edad" : "es menor de edad"
console.log(`la persona ${mayor}`);//imprimo el mensaje
}