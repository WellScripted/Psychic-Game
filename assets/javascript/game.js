//Declaring computerChoices variables
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Declaring player's variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//Declaring Computer & User guesses
var guessedLetters = [];
var computerGuesses = [];


//Game Structure
window.onload = function() {
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuesses.push(compGuess);
    console.log(computerGuesses[0]);
}

document.onkeyup = function(event) {
    var userGuesses = event.key;
    guessedLetters.push(userGuesses);
    console.log(computerGuesses[0]);


//"if" statement
if ((userGuesses === computerGuesses[0]) && (guessesLeft > 0)) {
    wins++;
    guessesLeft = 9;
    guessedLetters.length = 0;
    computerGuesses.length = 0;
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuesses.push(compGuess);
    console.log(computerGuesses[0]);
}

//"else if" statement
else if ((userGuesses !== computerGuesses[0]) && (guessesLeft > 0)) {
    guessesLeft = guessesLeft-1; //error in original push
}

//"else" statement
else {
    losses++;
    guessesLeft = 9;
    guessedLetters.length = 0;
    computerGuesses.length = 0;
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuesses.push(compGuess);
    console.log(computerGuesses[0]);
    console.log("Loss counter",losses)
}

//Adding a var HTML and Adding a document.querySelector()
var html = "<h2>Can you guess what letter or number that Im thinking of?</h2>" +
            "<hr />" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Guesses thus far: " + guessedLetters + "</p>";

document.querySelector("#theGame").innerHTML = html;

}