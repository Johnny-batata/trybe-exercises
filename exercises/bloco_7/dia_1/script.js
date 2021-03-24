// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

//exercício 1

// const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
// const elseScope = 'Não devo ser utilizada fora meu escopo (else)';

// const batata = (escopo) => (escopo === true ? `${ifScope} ótimo, fui utilizada no escopo !` : `${elseScope} o que estou fazendo aqui ? :O`)

// console.log(batata(true))

//exercício 2

// const frase = 'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!' 
// const numbers = [13, 3, 4, 10, 7, 2]
// const oddsSort = numbers.sort((a, b) => a - b);

// const oddsAndEvens = (param) => (param === true  ? `${oddsSort}\n${frase}` : `Não tem nada n doido rum` )

// console.log(oddsAndEvens(true)) 




// exercicio 3 

// const number = 4;

// const loopFatorial = (param) => { 
//   if (validate === true) {
//     let array = [];
//     for (i = param; i > 0; i -= 1) {
//       let index = i;
//       array.push(index);
//     } 
//     console.log(array);
//     const multiplicar = (batatas) => batatas.reduce((indice, numeroAtual) => indice * numeroAtual);
//     console.log (multiplicar(array))
//   } 
// }
// loopFatorial(number)

// const createArray = (param) => { 
//   const array = [];
  
//   for (i = param; i > 0; i -= 1) {
//     let index = i;
//     array.push(index);
//   } return array 
// } 

// const multiplicar = (batatas) => batatas.reduce((indice, numeroAtual) => indice * numeroAtual);
// const validate = number > 0 ? multiplicar(createArray(number)) : false;

// console.log(createArray(number))
// console.log(number)
// console.log(validate)


// exercicio 4
// const biggestWord = (word) => {
//   let array = word.split(' ')
//   let biggest = '';
//   let batata = 0;

//    for (const i of array) {
//      if (i.length > batata) {
//          batata = i.length
//          biggest = i
//      }
//    }
//    return biggest
// }
//   console.log(biggestWord ("Antonio foi no banheiro e não sabemos o que aconteceu"))

// const stringDecoder = () => { loopString('bebeto')
//  } 

// const loopString = (phrase) => {
//   const frase = 'sopa x arroz'
//   const wordSplit = frase.split('')
//   let result = '';
  
//     for (i = 0;  i < wordSplit.length; i += 1) {
//     wordSplit[i] === 'x' ? result += phrase : result += wordSplit[i] 
//     } 
//   console.log(result);
// }
// stringDecoder()




// const array = ['js', 'css', 'html', 'arroz', 'batata']

// function buildSkillsPhrase (name) {
//     const fun1 = name => (
//       `Tryber ${name} aqui!
//     Tudo bem?`
//     )

//     let result = `${fun1(name)}

//     As minhas cinco principais habilidades são:`

//     array.forEach((skill) =>
//     result = `${result}

//     - ${skill}`)

//     result = `
//     ${result}

//     #goTrybe
//     `

//     return result
// }

// console.log(buildSkillsPhrase("Johnny"))  
   


