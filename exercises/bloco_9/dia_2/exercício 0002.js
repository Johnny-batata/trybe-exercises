// const fetchPromise = () => {
//     const myPromise = new Promise((resolve, reject) => {
//       const myArray = Array.from(
//         { length: 10 },
//         () =>  Math.floor(Math.random() * 50) + 1
//       );
//       const sum = myArray.map(number => number * number)
//                          .reduce((sum, number) => sum + number);


//       (sum < 8000) ? resolve() : reject();
//     });
  
//     myPromise
//       .then(() => console.log('Promise resolvida'))
//       .catch(() => console.log('Promise rejeitada'));
//   };
  
//   fetchPromise();
const batata = () =>{
    return Math.floor(Math.random() * 10)
   }

   const fetchPromise = () => {
    const myPromise = new Promise((resolve, reject) =>  {
    const arr = [batata(), batata(), batata(), batata(), batata(), batata(),batata(), batata(), batata(), batata()];
    const sum = arr.map(number => number * number)
    .reduce((sum, number) => sum + number);
        if (sum < 8000) {
            return resolve()
        } else {
            return reject()
        }
    });
    myPromise
    .then(() => console.log('pão de batata'))
    .catch(() => console.log('pão com teto'))
  }
fetchPromise()


