const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'mexerica'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'melancia', 'mamão'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return  [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));