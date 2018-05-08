var button = document.querySelector('.button');
var guess = document.querySelector('#input');
var lastGuess = document.querySelector('#last-guess');
var clearButton = document.querySelector('.clear-button');
var compare = document.querySelector('.compare');
var reset = document.querySelector('.bottom-button')
var newGame = document.querySelector('.new-game')
var min = 1;
var max = 101;
var number

function setRandomInt(m) {
    number = Math.floor(Math.random() * Math.floor(m));  
    console.log(number);
    newGame.innerText = 'New Game!';
}
setRandomInt(max);

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
        compare.innerText = 'You win!';
        setRandomInt(max);
        newGame.innerText = 'New Game!';
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

button.addEventListener('click', function(){
    userInput = guess.value;
    lastGuess.innerText = userInput;
    compareGuess();
    guess.value = '';
});

clearButton.addEventListener('click', function(){
    guess.value = '';
});

reset.addEventListener('click', function(){
    setRandomInt(max);
    compare.innerText = '';
    lastGuess.innerText = '#';
    guess.value = '';
})