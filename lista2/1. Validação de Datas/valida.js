function ehDataValida(dia, mes, ano) {
  const mesesCom30 = [4, 6, 9, 11];
  const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

  if (mes < 1 || mes > 12 || dia < 1) return false;

  if (mes === 2) return dia <= (bissexto ? 29 : 28);
  if (mesesCom30.includes(mes)) return dia <= 30;
  return dia <= 31;
}

// Teste:
console.log(ehDataValida(29, 2, 2024)); // true
console.log(ehDataValida(31, 4, 2023)); // false
