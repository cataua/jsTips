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
 * Função semelhante ao filter, porém retorna apenas o primeiro resultado encontrado
 * Array.find(callback(param))
 * Caso não existam itens que satisfaçam a condição é retornado undefined
 * URL MDN Docs: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */
const alunos_com_nota_sete = alunos.find((aluno) => {
  return aluno.nota >= 7.0;
});

console.log(alunos_com_nota_sete)

