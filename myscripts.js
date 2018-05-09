var button = document.querySelector('.button');
var guess = document.querySelector('#input');
var lastGuess = document.querySelector('#last-guess');
var clearButton = document.querySelector('.clear-button');
var compare = document.querySelector('.compare');
var reset = document.querySelector('.bottom-button');
var newGame = document.querySelector('.new-game');
var guessButton = document.querySelector('.guess-button');
var min = 0;
var max = 101;
var number = getRandomInt(min, max);

guess.addEventListener('keyup', function() {
    if (guess.value !== '') {
        enableButtons();
    }
});

function getRandomInt(minn, maxx) {
    min = Math.ceil(minn);
    max = Math.floor(maxx);
    return Math.floor(Math.random() * (maxx - minn)) + minn;
}
console.log(number);


function compareGuess(){
    if (userInput > number && userInput < max) {
        compare.innerText = 'Too high';
        newGame.innerText = 'WRONG';
    }
    else if (userInput < number && userInput > min) {
        compare.innerText = 'Too Low';
        newGame.innerText = 'WRONG';
    }
    else if (userInput === number.toString()) {
        compare.innerText = 'You win! Let\'s make it a bit harder.';
        upDifficulty();
        number = getRandomInt(min, max);
        newGame.innerText = 'New Game!';
        console.log(number)
    }
    else if (!parseInt(userInput)) {
        compare.innerText = 'Invalid Entry: Not a Number';
        newGame.innerText = 'WRONG';
    }
    else {
        compare.innerText = 'Invalid Entry: Outside Parameters';
        newGame.innerText = 'WRONG';
    } 
}

function upDifficulty() {
    min = min - 10;
    max = max + 10;
    guess.placeholder = 'Pick a Number between ' + min + ' and ' + max;
};

button.addEventListener('click', function(){
    userInput = guess.value;
    lastGuess.innerText = userInput;
    compareGuess();
    guess.value = '';
    disableButtons();
});

clearButton.addEventListener('click', function(){
    guess.value = '';
    disableButtons();
});

function enableButtons(){
    guessButton.disabled = false;
    clearButton.disabled = false;
    reset.disabled = false;
};

function disableButtons(){
    clearButton.disabled = true;
    guessButton.disabled = true;
};

function disableReset() {
    reset.disabled = true;
}

reset.addEventListener('click', function(){
    min = 0;
    max = 101;
    guess.placeholder = 'Pick a Number between 1 and 100';
    compare.innerText = '';
    lastGuess.innerText = '#';
    guess.value = '';
    disableButtons();
    disableReset();
    number = getRandomInt(min, max);
    console.log(number);
});