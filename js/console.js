console.groupCollapsed("Nossas mensagens");
console.log("estou escrevendo no console");

console.error("eu sou um erro");

console.warn("eu sou um aviso");

let num = 12;
if(num > 10){
    console.error("numero não pode ser maior que 10")
}

console.assert(num<=10, "numero não pode ser maior que 10");

console.groupEnd();

console.table([
    [1, 2, 3],
    [2, 4, 6]
])
console.table([
    {nome: "Alura", numero: 35},
    {nome: "Patricia", numero: 42}
])