let randomNumber = parseInt(Math.random() * 100 + 1);

const submitGuess = document.querySelector('#submitguess');
const userInput = document.querySelector('#userInput');
const guessSlot = document.querySelector('.prevGuesses');
const remanining = document.querySelector('.remGuesses');
const lowOrHi = document.querySelector('.hiOrLow');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) { 
    submitGuess.addEventListener('click', (e) => { 
        e.preventDefault();
        const guess = userInput.value;
        validateGuess(guess)
    })
}

function validateGuess(guess) { 
    if (!guess) {
        alert(`Enter a valid number`)
    } else if (guess < 1) {
        alert(`Enter a number greator than 1`)
    } else if (guess > 100) {
        alert(`Enter a number less than 100`)
    } else { 
        prevGuesses.push(guess);
        if (numGuesses === 11) {
            displayGuess(guess)
            displayMessage(`Game is over Random No was: ${randomNumber}`)
            endGame()
        } else { 
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) { 
    if (guess === randomNumber) {
        displayMessage(`You guessed it right!`);
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low!`)
    } else if (guess > randomNumber) { 
        displayGuess(`Number is to high!!`)
    }
}

function displayGuess(guess) { 
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuesses++
    remanining.innerHTML = `${11 - numGuesses}`
}

function displayMessage(message) { 
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame() { 
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add(`button`)
    p.innerHTML = `<span id= "newGame">Start new Game</span>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() { 
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', () => { 
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuesses = []
        numGuesses = 1
        guessSlot.innerHTML = ``
        remanining.innerHTML = `${11 - numGuesses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
        
    })
}
