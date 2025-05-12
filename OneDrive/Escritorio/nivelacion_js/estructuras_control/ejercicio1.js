// Crea una función que determine el precio de un boleto según la edad:
// - Menores de 5: gratis
// - Entre 5 y 12: 5€
// - Entre 13 y 65: 10€
// - Mayores de 65: 7€
function ejecutarEjercicio1() {
    let edad = Number(prompt("digite su edad"));
if (edad < 5) {
    console.log("por ser menor de 5 años, entras gratis");
} else if (edad >= 5 && edad <= 12) {
    console.log("el boleto cuesta 5€");
} else if (edad >= 13 && edad <= 65) {
    console.log("el boleto cuesta 10€");
} else {
    console.log("el boleto cuesta 7€");
}
}