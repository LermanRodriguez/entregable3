function realizarOperacion(numero1, numero2, operador) {
    if (operador === 'suma') return numero1 + numero2;
    if (operador === 'resta') return numero1 - numero2;
    if (operador === 'multiplicacion') return numero1 * numero2;
    if (operador === 'division') return numero2 === 0 ? 'Error: División entre cero' : numero1 / numero2;
    return 'Operador inválido';
}

do {
    const numero1 = parseFloat(prompt("Ingrese el primer número:"));
    const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    const operador = prompt("Ingrese la operación (suma, resta, multiplicacion, division):").toLowerCase();

    console.log(`El resultado es: ${realizarOperacion(numero1, numero2, operador)}`);

} while (prompt("¿Desea realizar otra operación? (si/no)").toLowerCase() === 'si');

console.log("Gracias por usar esta calculadora.");
