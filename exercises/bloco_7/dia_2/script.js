const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(` Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number} , AP: ${order.address.apartment}.`)

}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newName = order.name = 'Luiz Oliveira';
  const pizzasMuzzarela = order.order.pizza = 'muzzarela';
  const pizzasCalabresa = order.order.pizza = 'calabresa';
  const drink = order.order.drinks.coke.type;
  const newTotal = order.payment.total = '50';

  console.log(`Olá ${newName}, o total do seu pedido de ${pizzasMuzzarela}, ${pizzasCalabresa} e ${drink} é R$ ${newTotal},00.`)

}

orderModifier(order);

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// // // Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, 'turno', 'noite');

console.log(lesson2)

// // Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson1));

// Crie uma função para mostrar o tamanho de um objeto.
const listKeys = (obj) =>  Object.entries(obj).length;
console.log(listKeys(lesson1));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) => Object.values(obj);
console.log(listKeys(lesson1))

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:


let allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons)

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.


const studentsLesson1 = allLessons.lesson1.numeroEstudantes
const studentsLesson2 = allLessons.lesson2.numeroEstudantes
const studentsLesson3 = allLessons.lesson3.numeroEstudantes

const totalStudents = () => { console.log(studentsLesson1 + studentsLesson2 + studentsLesson3)}
totalStudents()

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 2));


// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

// procurar ocmo reagir da melhor forma numa situaçlão de estresse e como melhorar minha comunicação e praticar 



const verifyPair = (obj, param1, param2) => {
  const listEntries =  Object.entries(obj);
  let result = false;
   for (let index in listEntries) {
     if (listEntries[index][0] === param1 && listEntries[index][1] === param2) result = true;
   }
   return result;
 };
 console.log(verifyPair(lesson2,'professor','Carlos'));



