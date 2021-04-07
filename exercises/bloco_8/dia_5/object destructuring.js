const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

// const {name} = product;
// console.log(name)
// const arrayDeTeste = [10,50];


// const student = {
//     a: 'Maria',
//     b: 'Turma B',
//     c: 'Matematica',
//   };

//   const{a: estudante, b: turma, c: matéria} = student

//   console.log(estudante)
// //   const { a: name, b: classAssigned, c: subject } = student;

// const newArray = [...arrayDeTeste, name, turma ];
// console.log(newArray)

  const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller} `);
  };
  
  printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({ max, min }) => (max + min) / 2.0; 
  // Only change code above this line
  console.log(half(stats))