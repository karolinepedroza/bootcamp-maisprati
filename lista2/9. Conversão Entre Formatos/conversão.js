function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

// Teste:
const pares = [["nome", "Karoline"], ["idade", 25]];
const obj = { nome: "Karoline", idade: 25 };

console.log(paresParaObjeto(pares)); // { nome: "Karoline", idade: 25 }
console.log(objetoParaPares(obj));   // [["nome", "Karoline"], ["idade", 25]]
