function ejecutarEjercicio7() {
    // Compara los siguientes valores y explica los resultados:
// 5 == "5"
// 5 === "5"
// 0 == false
// 0 === false
// null == undefined

console.log("5 == '5':", 5 == "5"); // true, porque == compara solo el valor, no el tipo
console.log("5 === '5':", 5 === "5"); // false, porque === compara tanto el valor como el tipo

console.log("0 == false:", 0 == false); // true, porque == convierte false a 0
console.log("0 === false:", 0 === false); // false, porque === compara tanto el valor como el tipo

console.log("null == undefined:", null == undefined); // true, porque == considera null y undefined como iguales en valor
console.log("null === undefined:", null === undefined); // false, porque === compara tanto el valor como el tipo, y son de diferente tipo
}