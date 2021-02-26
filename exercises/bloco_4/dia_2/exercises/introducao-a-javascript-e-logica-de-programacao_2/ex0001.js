/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

1.
for(i = 0; i <= numbers.length -1; i++){
    console.log(numbers[i] )
}

2.

let soma = 0
for(let index = 0; index < numbers.length; index++) {
    soma += numbers[index]
}
console.log(soma)

3.
let ultimo = numbers[numbers.length - 1];
console.log(ultimo);

let quantidade = numbers.indexOf(27);
console.log(quantidade);

let soma = 0
for(let index = 0; index < numbers.length; index++) {
    soma += numbers[index]
}
console.log(soma)

let media = soma / quantidade
console.log(media)

4. 
let ultimo = numbers[numbers.length - 1];
console.log(ultimo);

let quantidade = numbers.indexOf(27);
console.log(quantidade);

let soma = 0
for(let index = 0; index < numbers.length; index++) {
    soma += numbers[index]
}
console.log(soma)

let media = soma / quantidade
console.log(media)

if(media > 20){
    console.log("Valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}



5.

let maior = 0;
for(let index = 0; index < numbers.length; index++){
    if (numbers[index] > maior){
        maior = numbers[index];
    } 
}
console.log(maior);

6.
let impar = [];

for(let index = 0; index < numbers.length; index++){
    if (numbers[index] % 2 !== 0){
    impar.push(numbers[index]);
} if (impar < 1 ){
    console.log("nenhum valor ímpar encontrado")
}
} 
console.log(impar);

7.
let maior = 0;
for(let index = 0; index < numbers.length; index++){
    if (numbers[index] > maior){
        maior = numbers[index];
    } 
}

let menor = maior;
for(let index = 0; index < numbers.length; index++){
    if (numbers[index] < menor){
        menor = numbers[index];
    } 
}
console.log(menor);

8.
let numero = [1]
for(let i = 2; i <= 25; i++){
    numero.push(i);
}
console.log(numero)

9.

let numero = [1]
for(let i = 2; i <= 25; i++){
    numero.push(i);
}


for(let i = 0; i < numero.length; i += 1){
console.log(numero[i] / 2)
}

"Bonus"
1.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let primeiro = 1; primeiro < numbers.length; primeiro++) {
  for (let segundo = 0; segundo < primeiro; segundo++) { /* este for é para comparação do segundo item do array com o primeir item */
    /*if (numbers[primeiro] < numbers[segundo]) {
      let position = numbers[primeiro];

      numbers[primeiro] = numbers[segundo];
      numbers[segundo] = position;
    }
  }console.log(numbers*2);
}

console.log(numbers);

2.
for (let primeiro = 1; primeiro < numbers.length; primeiro++) {
    for (let segundo = 0; segundo < primeiro; segundo++) { /* este for é para comparação do segundo item do array com o primeir item */
      /*if (numbers[primeiro] > numbers[segundo]) {
        let position = numbers[primeiro];
  
        numbers[primeiro] = numbers[segundo];
        numbers[segundo] = position;
      }
    }
  } console.log(numbers);
  */
 3.
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let resultado = [];
  for (let primeiro = 0; primeiro < numbers.length; primeiro++) {
 if (numbers[primeiro + 1]){
     resultado.push(numbers[primeiro] * numbers[primeiro + 1])
 } else{
     resultado.push(numbers[primeiro] * 2)
 }
}
  
  console.log(resultado);
  
