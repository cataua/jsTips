import readline from 'readline';

const inputPrompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

inputPrompt.question('Qual o seu nome? ', (nome) => {
  console.info(`Olá, ${nome}`)
  inputPrompt.close()
});
