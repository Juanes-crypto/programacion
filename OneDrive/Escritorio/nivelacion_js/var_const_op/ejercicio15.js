//Declara una variable **`base`** y otra **`exponente`**, y calcula la potencia utilizando el operador de exponenciación (**`*`**).

function ejecutarEjercicio15() {
    let base;
let exponente;
base = Number(prompt("ingrese la base:"));
exponente = Number(prompt("ingrese el exponente:"));
let potencia = base ** exponente; //declaro la variable potencia y le asigno el resultado de la base elevada al exponente
console.log(`la potencia de ${base} elevado a ${exponente} es: ${potencia}`);//imprimo el resultado
}