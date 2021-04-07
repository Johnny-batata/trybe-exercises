
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
// 5. Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  return names.reduce((letter, currentLetter) => 
  letter + currentLetter.split('').reduce((acc, curr) => {
    if (curr === 'a'|| curr === 'A') {
      return acc + 1;
    } return acc;
  }, 0), 0)

  // return names.reduce((letter, currentLetter) => 
  // letter + currentLetter.split('').reduce((acumulator, current) => {
  // if (current === 'a' || current === 'A') { 
  //   return acumulator +1 
  // } 
  // return acumulator;
  // },0),0)

  }
  console.log(containsA())
// assert.deepStrictEqual(containsA(), 20);