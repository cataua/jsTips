const lista = [
  {
    type: 'fruta',
    name: 'laranja',
  },
  {
    type: 'verdura',
    name: 'alface',
  },
  {
    type: 'fruta',
    name: 'tomate',
  },
  {
    type: 'fruta',
    name: 'acerola',
  },
  {
    type: 'verdura',
    name: 'espinafre',
  },
  {
    type: 'verdura',
    name: 'taioba',
  },
  {
    type: 'fruta',
    name: 'mamão',
  },
  {
    type: 'verdura',
    name: 'couve',
  },
  {
    type: 'fruta',
    name: 'manga',
  },
]

/**
 * A função filter, como o própio nome já diz filtra uma array baseado em uma condição definida no callback
 * NOTA: a função filter, retorna todos os elementos que são aceitos pela condição, para retornar somente o primeiro que encontrar, usar find
 * URL MDN Docs: 
 */
const frutas = lista.filter((item) => {
  return item.type === 'fruta'
});

const verduras = lista.filter((item) => {
  return item.type === 'verdura'
})

console.log(frutas)
console.log('====================')
console.log(verduras)