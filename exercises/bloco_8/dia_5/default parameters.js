const  hser = 'batata'
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(hser); // // Welcome usuário!


// Simples assim! Passar um parâmetro como default é um pequeno detalhe que torna o seu código muito mais semântico. Assim, o default será utilizado caso nenhum argumento seja fornecido a função. Você pode adicionar mais de um parâmetro default caso a sua função receba vários argumentos, se achar necessário. Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => {
    // Escreva aqui a sua função
    return number * value
  };
  
  console.log(multiply(8));