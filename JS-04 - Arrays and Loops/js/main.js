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