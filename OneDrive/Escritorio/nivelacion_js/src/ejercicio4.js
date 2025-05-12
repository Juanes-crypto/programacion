function ejecutarEjercicio4() {
let var1;
let var2 = null;

if (var1 == var2) { // compara ambas variables, preguntando si son iguales
    console.log("son iguales");//en este caso son iguales porque null es un valor vacio
    //y undefien (var1) es un valor indefinido
}
if (var1 === var2) { // compara ambas variables, preguntando si son exactamente iguales
    console.log("son disitntas");//lanza el valor de falso porque son tipos de datos diferentes
    //undefined es un tipo de dato y null es otro tipo de dato
}
}