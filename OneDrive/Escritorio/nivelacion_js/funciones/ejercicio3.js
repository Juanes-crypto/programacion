// Crea una función que salude a un usuario
// Debe tener parámetros por defecto para:
// - nombre
// - idioma (español, inglés, francés)
// - hora del día
function ejecutarEjercicio3() {
    function saludo(nombre = "Usuario", idioma = "español", hora = new Date().getHours()) { //recibe parametros
    //y tiene valores por defecto, la hora por defecto sera la hora del sistema
    let saludo = "";//empieza vacia, porque al pasar de la funcion, esta obtendra un valor 

    if (idioma === "español") {
        if (hora >= 6 && hora < 12) {
            saludo = "Buenos días, ";
        } else if (hora >= 12 && hora < 18) { //bloque de saludo personalisado.
            saludo = "Buenas tardes, ";
        } else {
            saludo = "Buenas noches, ";
        }
    } else if (idioma === "inglés") {
        if (hora >= 6 && hora < 12) {
            saludo = "Good morning, ";
        } else if (hora >= 12 && hora < 18) {
            saludo = "Good afternoon, ";
        } else {
            saludo = "Good evening, ";
        }
    } else if (idioma === "francés") {
        if (hora >= 6 && hora < 12) {
            saludo = "Bonjour, ";
        } else if (hora >= 12 && hora < 18) {
            saludo = "Bon après-midi, ";
        } else {
            saludo = "Bonsoir, ";
        }
    } else {
        saludo = "Hola, "; // Idioma por defecto
    }

    console.log(saludo + nombre + "!");
}

// Ejemplos de uso:
saludo(); //manda los valores opr defecto (en caso de no ser proporcioados)
}