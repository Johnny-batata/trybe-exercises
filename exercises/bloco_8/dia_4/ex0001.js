// const collection = [1, 2, 3, 4, 5];

// const getSum = (accumulator, number) => {
//   console.log(accumulator); // 1 3 6 10
//   return accumulator + number;
// };

// const sumNumbers = collection.reduce(getSum);
// console.log(sumNumbers); // 15/


// var numeros = [0, 1, 2, 3, 4, 5, 6];
// var total = numeros.reduce((acumulador, numero, indice, original) => {
// console.info(`${acumulador} total até o momento`);
// console.log(`${numero} valor atual`);
// console.log(`${indice} indice atual`);
// console.log(`${original} array original`);
// return acumulador)

// console.log(total)


// const a = [1, 2, 3, 4, 5], b = [6, 7, 8, 9, 10];
// var ab = a.reduce((acumulador, elemento) => acumulador += elemento,
// b.reduce((acumulador, elemento) => acumulador += elemento, 0))
// console.log(ab);


// const animais = [
//     {
//       nome: 'Fumaça',
//       idade: 3,
//       tipo: 'cao'
//     },
//     {
//       nome: 'Tobby',
//       idade: 6,
//       tipo: 'cao'
//     },
//     {
//       nome: 'Laminha',
//       idade: 1,
//       tipo: 'gato'
//     },
//     {
//       nome: 'Nutella',
//       idade: 3,
//       tipo: 'cao'
//     },
//     ];

//     const batata = animais.filter((animal) => animal.tipo === 'cao').map((animal) => animal.idade * 7)
//     const batataReduced = batata.reduce((acumulador, valorAtual) => acumulador + valorAtual)

//     console.log(batata)
//     console.log(batataReduced)



//     dogsAgeSum = animais.reduce((total, elemento) => {
//         if (elemento.tipo === 'cao') return total += (elemento.idade *=7);
//         else return total}, 0);
    // console.log(dogsAgeSum)

    const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
    // const isEven = numbers.filter((number) => number % 2 === 0);
    // console.log(isEven)
    // const isEvenReduced = isEven.reduce((number,currentValue) => number + currentValue);
    // console.log(isEvenReduced)

    // const teste = 18 + 4 + 76 + 54
    // console.log(teste)
    const batata = numbers.reduce((number, currentValue) => { 
        console.log(`${number} batata `)
        console.log(currentValue)
        if (number % 2 === 0) {
            console.log('batata')
            return number += currentValue;
        }  return number; 
    }, 0);
    console.log(batata)