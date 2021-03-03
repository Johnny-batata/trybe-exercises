
/*1.
let arroz = "tubarão"

function palindromo(param1){
let palavra = param1
let resultado = '';
 resultado = palavra.split('').reverse().join('');
 if (resultado === palavra ) {
     console.log(`a palavra ao contrário fica ${resultado} e é um palíndromo`)
 } else {
     console.log(`a palavra ao contrário fica ${resultado} e não é um palíndromo`)
 }
 return palavra     
} console.log(palindromo(arroz))

2.
arrayAlunos = [2, 3, 6, 7, 10, 1]
function maiorIndice(numeros){
      let indiceMaior = 0; 

    for(let indice in numeros){
        if (numeros[indice] > numeros[indiceMaior]) { 
            indiceMaior = indice
        }
    }
    return indiceMaior
}
console.log(maiorIndice([2, 3, 6, 7, 10, 1]))

3.
arrayAlunos = [2, 4, 6, 7, 10, 0, -3]
function maiorIndice(numeros){
      let indiceMenor = 0; 

    for(let indice in numeros){
        if (numeros[indice] < numeros[indiceMenor]) { 
            indiceMenor = indice
        }
    }
    return indiceMenor
}
console.log(maiorIndice([2, 4, 6, 7, 10, 0, -3]))

4.
array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function contadorDeArray(palavra){
        let nomeMaior = palavra[0];
    for(let nome in palavra){
        if(palavra[nome].length > nomeMaior.length){
            nomeMaior = palavra[nome];
        }
    }
return nomeMaior;
}
console.log(contadorDeArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

5.

function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero++;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }
  
  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

 6.
   function soma(numeros) {
     
 let soma = 0; 

for(let index = 0; index <= numeros; index++) {
    soma += index
} return soma;
}
console.log(soma(5))
  
 7.

 function verificador(palavra, fim){
  
   
     palavraInversa = palavra.split('').reverse();
     fimInversa = fim.split('').reverse()

     for (let i = 0; i < fimInversa.length; i ++) {
      if (palavraInversa[i] != fimInversa[i]) {
        return false;
      } else {
        return true;
      }
    }
    
  }
  console.log(verificador("fernando", "arroz"))
  console.log(palavraInversa)
  console.log(fimInversa)
*/ 

 