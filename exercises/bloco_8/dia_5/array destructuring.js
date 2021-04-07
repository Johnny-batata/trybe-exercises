const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// let a = 8, b = 6;
// console.log([a, b] = [b, a]);

// const [a, b, ...pao] = [1, 2, 3, 4, 5, 7];
// console.log(a, b);
// console.log(pao);

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...pao] = list;
  const arr = pao // Change this line
  console.log(arr)
  console.log(pao)
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);