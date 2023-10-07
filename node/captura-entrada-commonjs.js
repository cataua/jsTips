const readline = require('readline/promises');

const Ola_mundo = async () => {

  const inputPrompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const nome = await inputPrompt.question('Qual o seu nome?')
  const idade = await inputPrompt.question('Qual a sua idade?')
  
  console.info(`Olá, ${nome}, vc tem ${idade} anos`)
  inputPrompt.close()
}

Ola_mundo()