const socket = window.io();

const like = document.querySelector('#likeIcon')

like.addEventListener('click', () => {
  socket.emit('likePost');
  console.log('batata')
});

socket.on('updateLikes', (countLikes) => {
  document.querySelector('#currentLikes').innerHTML = countLikes;
});

document.querySelector('#starIcon').addEventListener('click', () => {
  const currentStarsElement = document.querySelector('#currentStars');
  let currentStars = parseInt(currentStarsElement.innerHTML);
  
  currentStarsElement.innerHTML = currentStars + 1;

  socket.emit('starPost');
});
socket.on('updateStars', (countStars) => {
  document.querySelector('#currentStars').innerHTML = countStars;
});