
function createState() {
  let pai = document.getElementById('estado');
  const stateOptions = ['Selecione seu estado', 'Acre', 
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'];


  for (let index = 0; index < stateOptions.length; index += 1) {
    const filho = document.createElement('option');
    pai.appendChild(filho).innerText = stateOptions[index];
   }
}
createState() 

const clearButton = document.querySelector('#reset');

function clearFields() {
  const inputs = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  
  for (let index = 0; index < inputs.length; index += 1) {
    const userInput = inputs[index];
    userInput.value = '';
    textArea.value = '';
  }
} 
clearButton.addEventListener('click', clearFields);

function renderCurriculum(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const dataUser = document.querySelector('.resultado');
    const div = document.createElement('div');

      div.className = 'div-curriculum';
      div.innerHTML = userInput;
      dataUser.appendChild(div);
    }
  }

const submitButton = document.querySelector('#send');
submitButton.addEventListener('click', renderCurriculum);