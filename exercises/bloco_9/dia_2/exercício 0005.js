const batata = () => {
    return Math.floor(Math.random() * 50)
   }

   const fetchPromise = () => {
    const myPromise = new Promise((resolve, reject) =>  {
    const arr = [batata(), batata(), batata(), batata(), batata(), batata(),batata(), batata(), batata(), batata()];
    const sum = arr.map(number => number * number)
    .reduce((sum, number) => sum + number);
    // console.log(sum)
        if (sum < 8000) {
            return resolve()
        } else {
            return reject()
        }
    });
    myPromise
      .then(sum => [2, 3, 5, 10].map(number => sum / number))
      .then(array => array.reduce((number, acc) => number + acc, 0))
      .catch(() =>
        console.log('É mais de oito mil! Essa promise deve estar quebrada!')
      ); 
}
fetchPromise()
