const alunos = [
  {
    nome: 'Rogerio',
    nota: 5.0
  },
  {
    nome: 'João',
    nota: 7.0
  },
  {
    nome: 'Maria',
    nota: 8.0
  },
  {
    nome: 'Mario',
    nota: 7.0
  },
  {
    nome: 'Jorge',
    nota: 7.0
  },
]
/**
 * Função semelhante ao find, porém retorna o índice do item que satisfaz a condição, caso contrário retorna -1
 * Array.findIndex(callback(param))
 * URL MDN Docs: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 */
const alunos_com_nota_sete = alunos.findIndex((aluno) => {
  return aluno.nota >= 7.0;
});

console.log(alunos_com_nota_sete)