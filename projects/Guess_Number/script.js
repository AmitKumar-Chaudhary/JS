let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('.guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        displayGuess(guess);
        if (numGuess === 10) {
            displayMessage(`Game Over. The number was ${randomNumber}`);
            endGame();
        } else {
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('🎉 You guessed it right!');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('📉 Too low!');
    } else {
        displayMessage('📈 Too high!');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.textContent += `${guess} `;
    remaining.textContent = `${10 - numGuess}`;
    numGuess++;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    displayMessage('Game Over! Click below to start a new game.');

    const newGameButton = document.createElement('button');
    newGameButton.textContent = 'Start New Game';
    newGameButton.classList.add('guessSubmit');
    startOver.appendChild(newGameButton);
    playGame = false;

    newGameButton.addEventListener('click', function () {
        newGame();
    });
}

function newGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    numGuess = 1;
    guessSlot.textContent = '';
    remaining.textContent = '10';
    userInput.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    lowOrHi.innerHTML = '';
    const button = document.querySelector('.resultParas button');
    if (button) button.remove();
    playGame = true;
}
