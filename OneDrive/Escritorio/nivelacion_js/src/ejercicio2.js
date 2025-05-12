function ejecutarEjercicio2() {
    let Str = "99";
let num = 1;
console.log(Str + num); // 991
// El resultado es 991 porque al sumar un string y un número, el número se convierte en string y se concatenan.
//lo mismo pasa si sumamos dos string, se concatenan
//concatenar significa unir dos cadenas de texto
//por lo tanto, el resultado es 991 porque se unen los dos valores como si fueran texto
let numero = 5;
let texto = "10";
console.log(numero + texto); // 510
// ¿Qué sucede si sumamos numero + texto?
// ¿Qué sucede si sumamos numero + Number(texto)?
// Explica la diferencia

// Si sumamos numero + texto, el resultado será 510 porque el número se convierte en string y se concatenan.
//al pasar el dato de texto a número, el resultado será 15 porque se suman los dos números.
//diferencia: la primera suma es una concatenación de strings, mientras que la segunda suma es una operación matemática entre números.
}