const lista = [1, 2, 3, 4, 5, 6, 1, 2, 3, 5, 6, 10, 11, 12]
/**
 * A função map serve para transformar uma array. Percorre todos os elementos de uma array e retorna conforme definido dentro do callback
 * URL MDN Docs: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
const nova_lista = lista.map((item, index) => {
  return {
    numero: item,
    texto: `Esse é o número ${item} que está no index ${index} da array`
  }
})

console.log(nova_lista)