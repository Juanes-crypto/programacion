
function ejecutarEjercicio6() {
    let num1Str = prompt("Ingrese el primer número: ");
let num2Str = prompt("Ingrese el segundo número: ");
let num1 = Number(num1Str);
let num2 = Number(num2Str);

function operacionesBasicas(num1, num2) { //se le agrregan los dos argumentos a la funcion
    const resultados = { //se crea el objeto con las funciones
        suma: num1 + num2,
        resta: num1 - num2,
        multiplicacion: num1 * num2,
        division: num1 / num2,
        residuo: num1 % num2,
    };

    console.log("Suma:", resultados.suma); //se imprimen los resultados de forma individual
    console.log("Resta:", resultados.resta);//accedemos a ellos a traves del nombre del objeto y el atributo
    console.log("Multiplicación:", resultados.multiplicacion);//con el punto (.) accedemos al atributo
    console.log("División:", resultados.division);
    console.log("Residuo:", resultados.residuo);
}

operacionesBasicas(num1, num2);//esto es muy importante porque hace que se ejecute la funcion
//esta linea es la que llama a la funcion y le pasa los argumentos
}