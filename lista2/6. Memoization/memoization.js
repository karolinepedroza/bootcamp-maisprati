function memoize(fn) {
  const cache = {};
  return function (...args) {
    const chave = JSON.stringify(args);
    if (cache[chave]) return cache[chave];
    const resultado = fn(...args);
    cache[chave] = resultado;
    return resultado;
  };
}

// Teste:
const soma = memoize((a, b) => a + b);
console.log(soma(2, 3)); // calcula
console.log(soma(2, 3)); // retorna do cache
