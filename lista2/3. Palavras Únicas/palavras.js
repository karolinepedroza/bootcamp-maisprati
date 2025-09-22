function palavrasUnicas(texto) {
  const palavras = texto.split(" ");
  const resultado = [];

  for (let i = 0; i < palavras.length; i++) {
    if (!palavras.includes(palavras[i], i + 1) && !resultado.includes(palavras[i])) {
      resultado.push(palavras[i]);
    }
  }

  return resultado;
}

// Teste:
console.log(palavrasUnicas("olá olá mundo mundo")); // ["mundo"]
