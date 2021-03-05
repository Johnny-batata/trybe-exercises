//Acesse o elemento elementoOndeVoceEsta .
function exercicio1(element) { 
  let text = document.getElementById(element);
  console.log(text);
} 
exercicio1('elementoOndeVoceEsta');

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
function exercicio2(element, fontColor) { 
  let text =  document.getElementById(element);
  text.parentNode.style.color = fontColor;
} 
exercicio2('elementoOndeVoceEsta', 'blue');


//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
function exercicio3(element, textLine) {
  let text =  document.getElementById(element);
  text.childNodes[1].innerText = textLine;
} 
exercicio3('elementoOndeVoceEsta', 'pão de queijo é possívelmente a melhor comida do mundo, exceto pelo pudim');

//Acesse o primeiroFilho a partir de pai .
function exercicio4(element){
  let text =  document.getElementById(element);
  console.log(text.childNodes[1]);
  
} 
exercicio4('pai');

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
function exercicio5(element){
  let text =  document.getElementById(element);
  console.log(text.previousElementSibling);
  
} 
exercicio5('elementoOndeVoceEsta');

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
function exercicio6(element){
  let text =  document.getElementById(element);
  console.log(text.parentNode.childNodes[4])
  
} 
exercicio6('elementoOndeVoceEsta');

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
function exercicio7(element){
  let text =  document.getElementById(element);
  console.log(text.nextElementSibling)
} 
exercicio7('elementoOndeVoceEsta');

// Agora acesse o terceiroFilho a partir de pai

function exercicio8(element){
  let text =  document.getElementById(element);
  console.log(text.childNodes[5])
} 
exercicio8('pai');

//segunda parte dos exercícios

//Crie um irmão para elementoOndeVoceEsta .

function exercicio9(element,tagName, textLine){
  let text =  document.getElementById(element).parentNode;
  let makeDiv = document.createElement(tagName)
  makeDiv.id = 'irmãoDeElementoOndeVoceEsta' 

  
  text.appendChild(makeDiv).innerText = textLine; 
} 
exercicio9('elementoOndeVoceEsta', 'div', 'funcionou');

//Crie um filho para elementoOndeVoceEsta .
function exercicio10(element,tagName, textLine){
  let text =  document.getElementById(element);
  let makeDiv = document.createElement(tagName)
  makeDiv.id = "arroz" 
  
  text.appendChild(makeDiv).innerText = textLine; 
} 
exercicio10('elementoOndeVoceEsta', 'div', 'funcionou de novo');

//Crie um filho para primeiroFilhoDoFilho .

function exercicio11(element,tagName, textLine){
  let text =  document.getElementById(element);
  let makeDiv = document.createElement(tagName)
  makeDiv.id = "filhoDePrimeiroFilhoDoFilho" 
  text.appendChild(makeDiv).innerText = textLine; 
} 
exercicio11('primeiroFilhoDoFilho', 'div', 'hamburguer');

// A partir desse filho criado, acesse terceiroFilho .

function exercicio12(element,tagName, textLine){
  let text =  document.getElementsByTagName(element)[5];
  let makeP = document.createElement(tagName);
  makeP.id = "filhoDeFilhoDePrimeiroFilhoDoFilho" 
  
  text.appendChild(makeP).innerText = textLine; 
} 
exercicio12('div', 'p','arroz');

//terceira parte dos exercícios

// Remova todos os elementos da página, menos pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

let ids = [
  "primeiroFilho",
  "segundoEUltimoFilhoDoFilho",
  "terceiroFilho",
  "quartoEUltimoFilho",
  "filhoDePrimeiroFilhoDoFilho",
  "filhoDeFilhoDePrimeiroFilhoDoFilho"
];

function removeItens(){
//   let array = document.querySelector('#pai');
//   for( let div of array) {
   
//     if(div.id.includes('primeiroFilho')) {
// array.removeChild(item)
//     }
//   } 

let filho1 = document.getElementById('primeiroFilho');
let filho2 = document.getElementById('segundoEUltimoFilhoDoFilho');
let filho3 = document.getElementById('terceiroFilho'); 
let filho4 = document.getElementById("quartoEUltimoFilho");
let filho5 = document.getElementById("filhoDePrimeiroFilhoDoFilho");
let filho6 = document.getElementById("filhoDeFilhoDePrimeiroFilhoDoFilho");
let filho7 = document.querySelector('#irmãoDeElementoOndeVoceEsta');
let filho8 = document.getElementById('arroz');


let pai = document.querySelector('#pai');
let element = document.querySelector('#elementoOndeVoceEsta')
let filho = document.querySelector('#filhoDePrimeiroFilhoDoFilho')
let primeiroFilho = document.querySelector('#primeiroFilhoDoFilho')

pai.removeChild(filho1)
element.removeChild(filho2)
pai.removeChild(filho3)
pai.removeChild(filho4)
filho.removeChild(filho6)
primeiroFilho.removeChild(filho5)
pai.removeChild(filho7)
element.removeChild(filho8)

  
} removeItens()
