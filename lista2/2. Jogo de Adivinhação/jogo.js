const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativa = 0;
let palpite;

while (palpite !== numeroSecreto) {
  palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
  tentativa++;
  if (palpite < numeroSecreto) alert("Mais alto!");
  else if (palpite > numeroSecreto) alert("Mais baixo!");
  else alert(`Acertou em ${tentativa} tentativas!`);
}
