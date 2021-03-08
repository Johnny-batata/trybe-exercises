function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDays(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysLi = document.querySelectorAll('#days')[0];

  for (i = 0; i < dezDaysList.length; i += 1){
    const days = dezDaysList[i];
    const dayList = document.createElement ('li');
    dayList.innerHTML = days
    dayList.className = 'day'
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31){
      dayList.className = 'day holiday'
    } if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25 ){
      dayList.className = 'day friday'
    }
    daysLi.appendChild(dayList)
  }
} 
createDays()

function createHolidayButton (feriados) {
  let pai = document.getElementsByClassName('buttons-container')[0];
  let holidayElement = document.createElement ('button');
  holidayElement.id = feriados;
  holidayElement.innerHTML = 'Feriados'
  pai.appendChild(holidayElement);
} 
createHolidayButton ('btn-holiday')

function aoClicar() {  
  let botao = document.querySelectorAll('.holiday')
  let background = 'rgb(238,238,238)';
  let setNewColor = 'white';
  let botaoFeriados = document.querySelector('#btn-holiday')

botaoFeriados.addEventListener('click', function() {
  for (let index = 0; index < botao.length; index += 1) {
    if (botao[index].style.backgroundColor === setNewColor) {
      botao[index].style.backgroundColor = background;
    } else {
      botao[index].style.backgroundColor = setNewColor;
      } 
    } 
  })
} 
aoClicar();

function createFridayButton (text){
let pai = document.getElementsByClassName('buttons-container')[0];
let fridayElement = document.createElement('button');
fridayElement.id = 'btn-friday';
fridayElement.innerHTML = text;
pai.appendChild(fridayElement)
}
createFridayButton ('Sexta-feira')

function aoClicarFriday(dias) {
  let botao = document.querySelector('#btn-friday');
  let botaoClass = document.querySelectorAll('.friday') 
  let text = 'sextou';
  

  botao.addEventListener('click', function(){
    for(i = 0; i < botaoClass.length; i += 1){
      if(botaoClass[i].innerHTML !== text){
      botaoClass[i].innerHTML = text
      } else{
      botaoClass[i].innerHTML = dias[i];
      }
    }
  })
}
let dezFridays = [ 4, 11, 18, 25 ];

aoClicarFriday(dezFridays)

function zoomIn() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function ZoomOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};
zoomIn();
ZoomOut();