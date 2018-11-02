//Declaring computerChoices variables
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Declaring player's variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//Declaring Computer & User guesses
var guessedLetters = [];
var compGuesses = [];

//Game Structure
document.onload = function() {
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    compGuesses.push(computerGuess);
    console.log(compGuesses[0]);
}

document.onkeyup = function(event) {
    var userGuesses = event.key;
    guessedLetters.push(compGuesses);
    console.log(compGuesses[0]);
}

//"if" statement
if ((userGuesses === compGuesses[0]) && (guessesLeft > 0)) {
    wins++;
    guessesLeft = 9;
    guessedLetters.length = 0;
    compGuesses.length = 0;
    var computerGuess = computerChoices[Math.floor(math.random() * computerChoices.length)];
    compGuesses.push(computerGuess);
    console.log(compGuesses[0]);
}

//"else if" statement
else if ((userGuesses !== compGuesses[0]) && (guessesLeft > 0)) {
    guessesLeft = guessedLetters-1;
}

//"else" statement
else {
    losses++;
    guessesLeft = 9;
    guessedLetters.length = 0;
    compGuesses.length = 0;
    var computerGuess = computerChoices[Math.floor(math.random() * computerChoices.length)];
    compGuesses.push(computerGuess);
    console.log(compGuesses[0]);
}

