1.
let a1 = 1;
let b1 = 1;

console.log(a + b); 
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);  

2.
let a2 = 15;
let b2 = 10;

if(a2 > b2){
    console.log("a2 é o maior número")
} 
else if(b2 > a2) {
    console.log("a2 é o maior número")
} 
else {
    console.log("Eles são equivalentes")
}

3.
let a3 = 11;
let b3 = 14;
let c3 = 15;

if(a3 > b3 && a3 > c3){
    console.log("a3 é o maior número")
} 
else if(b3 > a3 && b3 > c3) {
    console.log("b3 é o maior número")
} 
else if(c3 > a3 && c3 > b3) {
    console.log("c3 é o maior número")
} 
else if(c3 == a3 && c3 == b3 && a3 == b3 ) {
console.log("verifique novamente, pois todos empataram")
} 
else {
    console.log("há um empate")
} 

4.
const a4 = 0;
if(a4 >= 1){
    console.log("positivo")
}
else if(a4 < 0){
    console.log("negativo")
}
else{console.log(0)}

5.
let a5 = 80;
let b5 = 60;
let c5 = 40;
if( a5 +b5 + c5 == 180) {
    console.log("true")
}
else{
    console.log("false")
} 

6.
let peça = "BISHOP";

if (peça === "bishop" || "BISHOP"){
    console.log("diagonals")
} else {
    console.log("[ERRO]verifique novamente")
}
 

7.
let nota = 10;

if(nota >= 90){
    console.log("A")
}
else if(nota >= 80){
    console.log("B")
}
else if(nota >= 70){
    console.log("C")
}
else if(nota >= 60){
    console.log("D")
}
else if(nota >= 50){
    console.log("E")
}
else if(nota < 50){
    console.log("F")
}
else{
    console.log("[ERRO] verifique os dados e tente novamente")
}

8.
let a8 = 6;
let b8 = 7;
let c8 = 5;
let par = false;

if(a8 %2 === 0 || b8 % 2 === 0|| c8 % 2 === 0) {
    par = true;
};
console.log(par);

9.
let a9 = 9;
let b9 = 7;
let c9 = 5;

let impar = false;

if(a9 % 3 === 0 || b9 % 3 === 0|| c9 % 3 === 0) {
    impar = true;
};
console.log(impar);



10.
let quantidade = 1000;
let custoUni = 200;
let valorVenda = 100;

let custo = quantidade * custoUni; 
let imposto = custo * 0.20;
let custoTotal = custo + imposto;

let receita = valorVenda * quantidade;
let receitaTotal = quantidade + receita;

let lucro = receitaTotal - custoTotal
if (lucro < 0){
    console.log("[ERRO] não pode existir lucro negativo, verifique os dados novamente")
}
console.log(lucro)


11.
let salario = 1500.10;
let aliquotaInss = salario * 0.08;
let aliquotaIr = salario * 0;

let salarioBase = salario - aliquotaInss; 

console.log(salarioBase -aliquotaIr)


