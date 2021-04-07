// const person = {
//     name: 'João',
//     lastName: 'Jr',
//     age: 34,
//   };
  
//   const { nationality = 'Brazilian' } = person;
//   console.log(nationality); // Brazilian
//   console.log(person)
// //   const getNationality = ({ name, nationality }) => `${name} is ${nationality}`;
//   console.log(getNationality(person))



//   const position2d = [1.0, 2.0];
// const [x, y, z = 0] = position2d;

// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 0

const getNationality = ({ firstName, nationality = 'Brazilian'  }) => `${firstName} is ${nationality}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
    
};
  const { nationality = 'Brazilian' } = person;
      console.log(nationality); // Brazilian
      console.log(person)

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

// Que tal praticarmos default destructuring com um exercício de fixação? Do jeito que está, quando passamos person para a função nationality o retorno é João is undefined . Ajuste a função nationality para que a chamada nationality(person) retorne João is Brazilian .
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));