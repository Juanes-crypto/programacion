// Declara tres variables numéricas: **`a`**, **`b`** y **`c`**. 
// Utiliza operadores de comparación y lógicos para determinar si al menos dos de las variables 
// son iguales entre sí.


function ejecutarEjercicio7() {
   let a = 3;
let b = 2;
let c = 3;
 if (a == b || a == c || b == c) {//si a es igual a b o si a es igual a c o si b es igual c
    console.log("al menos dos de las variables son iguales entre sí");// lanza este mensaje si se cumple la condicion
    
 } else {
    console.log("ninguna de las variables son iguales entre sí");
    
 }
}