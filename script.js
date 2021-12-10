function randomColor() {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgb(${r}, ${g}, ${b})`
}

function colorization() {
  this.style.color = randomColor();
  this.style.backgroundColor = randomColor();
}

for (let i = 0; i < 36; i++) {
  const newBtn = document.createElement('button')
  newBtn.innerText = 'click'
  container.appendChild(newBtn)
  newBtn.addEventListener('click', colorization)
}


