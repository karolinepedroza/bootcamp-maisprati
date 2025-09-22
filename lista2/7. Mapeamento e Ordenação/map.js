function nomesOrdenados(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map(p => p.nome);
}

// Teste:
const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Mouse", preco: 50 },
  { nome: "Monitor", preco: 300 }
];
console.log(nomesOrdenados(produtos)); // ["Mouse", "Teclado", "Monitor"]
