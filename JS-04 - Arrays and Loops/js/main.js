let nombres = ["Sofia", "David", "Juan"];

nombres.push("Sara", "Agustin")
nombres.shift()

nombres.splice(1, 0, "Renata")
nombres.push("Elena")

console.log(nombres)
for (let i = 1; i <= 5; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += "* ";
    }
    console.log(linea);
}
let xvalue = 10;
for (let i = xvalue; i >= 0; i -= 0.5) {
    console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += (i % 2 !== 0) ? i : 0;
}
console.log(`La suma de los numero impares es: ${sum}`);

let cifraImprimir = 6, contador = 1;
while (contador <= cifraImprimir) {
    console.log(contador)
    contador++;
}


let n = 19, cont = 1, suma = 0;
while (cont <= n) {
    suma += cont;
    cont++;
}
console.log(` La suma de los numeros enteros positivos es: ${suma}`)