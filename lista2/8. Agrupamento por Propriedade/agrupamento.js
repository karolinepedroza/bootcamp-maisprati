function agruparPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
  }, {});
}

// Teste:
const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "João", total: 200 },
  { cliente: "Ana", total: 50 }
];
console.log(agruparPorCliente(vendas)); // { Ana: 150, João: 200 }
