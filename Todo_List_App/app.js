const userInput = document.querySelector('.userInput')
const button = document.querySelector('button')
const todoContainer = document.querySelector('.todoListContainer')

button.addEventListener('click', () => {
  if (userInput.value === '') {
    alert('Please write something to add')
  }
  else {
    let li = document.createElement('li')
    li.innerHTML = userInput.value
    todoContainer.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML = '\u00d7'
    li.appendChild(span)
  }

    userInput.value = ''
    saveData()
})

todoContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked')
      saveData()
  } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove()
      saveData()
 }
}, false)


function saveData() { 
    localStorage.setItem('data', todoContainer.innerHTML)
}

function displayData() { 
    todoContainer.innerHTML = localStorage.getItem('data')
}

displayData()