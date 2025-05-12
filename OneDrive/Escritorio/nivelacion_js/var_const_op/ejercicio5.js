//Crea una constante llamada **`nombre`** y asígnale tu nombre.
// Luego, declara una variable **`edad`** y asígnale tu edad.
// Utiliza concatenación de cadenas para imprimir un mensaje que diga "Hola, [nombre]. Tienes [edad] años."


function ejecutarEjercicio5() {
    const nombre = "juanes";
var edad = 18;
console.log("Hola, ",nombre, "tienes ", edad, " años");//lo hago de las dos formas.
templateString = `hola ${nombre}, tienes ${edad} años de edad`;
console.log(templateString)//con templateString me toca mostrarlo a traves de console.log
}