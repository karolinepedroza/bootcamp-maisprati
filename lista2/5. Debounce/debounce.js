function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Teste:
const log = debounce(() => console.log("Executado!"), 1000);
log();
log(); // só executa uma vez após 1s sem novas chamadas
