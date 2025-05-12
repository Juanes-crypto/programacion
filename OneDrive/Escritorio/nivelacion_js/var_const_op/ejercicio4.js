//Declara tres variables booleanas: **`llueve`**, **`haceSol`**, y **`viento`**. 
//Crea una expresión booleana utilizando operadores lógicos para determinar si es un buen día para ir de picnic.
// Un buen día para un picnic es cuando no llueve, hace sol y no hay viento.

function ejecutarEjercicio4() {
    let Lloviendo = prompt("esta lloviendo? (si/no)");
let soleado = prompt("esta haciendo sol? (si/no)");
let ventisca = prompt("Hay mucho viento? (si/no)");
let llueve = Lloviendo.toLowerCase() === "no";
let haceSol = soleado.toLowerCase() === "si";
let viento = ventisca.toLowerCase() === "no";
    if (llueve == true && haceSol == true && viento == true) {
        console.log("hoy es un buen dia para hacer un picnic.....");
    } else {
        console.log("Parace que hoy NO es un buen dia para hacer un picnic.....");

}
}