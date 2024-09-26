// Importando a biblioteca readline-sync
const prompt = require("readline-sync");

// Capturando o número de pessoas na mesa
const numeroPessoas = prompt.questionInt(
  "Digite o número de pessoas na mesa: "
);

// Capturando o valor total da conta
const valorTotal = prompt.questionFloat("Digite o valor total da conta: ");

// Capturando o método de pagamento
const metodoPagamento = prompt.question(
  "Qual é o método de pagamento (PIX, dinheiro ou cartão)? "
);

//Façã sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO
if (metodoPagamento === `pix` || metodoPagamento === `dinheiro`) {
  const totalAPagar = valorTotal * 0.9;
  const contaDividida = totalAPagar / numeroPessoas;
  console.log(
    `O total da conta fica em R$${totalAPagar} reais e dividido fica R$${contaDividida} reais por pessoa`
  );
} else if (metodoPagamento == `cartao` || metodoPagamento == `cartão`) {
  const totalSemDesconto = valorTotal;
  contaDividida = totalSemDesconto / numeroPessoas;
  console.log(
    `O total da conta fica em R$${totalSemDesconto} reais e dividido fica R$${contaDividida} reais por pessoa`
  );
} else {
  console.log(
    `PAGAMENTO FIADO SOMENTE ACIMA DOS 89 ANOS E ACOMPANHADO DOS PAIS !!!`
  );
}
// Exibindo os resultados
