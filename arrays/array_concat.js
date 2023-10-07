const timesRJ = ['Flamengo', 'Vasco', 'Fluminense', 'Botafogo']
const timesSP = ['São Paulo', 'Palmeiras', 'Corinthians', 'Portuguesa']
const timesMG = ['América', 'Atlético Mineiro', 'Cruzeiro', 'Tupi']
/**
 * Método que retorna uma nova array com todos os arrays e elementos passados como parâmetros
 * Arr.concat(valor1,valor2,....valorN)
 * URL MDN Docs: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 */
const times = timesRJ.concat(timesSP, timesMG)

console.log(times)