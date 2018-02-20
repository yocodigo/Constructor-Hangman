var GuessCheck = require("./letter.js");
//TEMP GLOBAL VARIABLES
var playerChoice = "car"; //will come from game.js
var character = "r"; //will come from game.js

/*------------------------------------------------------------------------------------
                                WORD CONSTRUCTOR
    (creates an object representing the current word the user is attempting to guess)
--------------------------------------------------------------------------------------*/
var MatchWord = function(hangman_word) {
    // An array of new Letter objects representing the letters of the underlying word
    this.hangman_word = function() {
        var hangmanLetterArray = hangman_word.split("");
        return hangmanLetterArray;
    };
    /*------------------------------------------------------------------------------
        A function that returns a string representing the word. This should call the 
        function on each letter object (the first function defined in Letter.js) that 
        displays the character or an underscore and concatenate those together.
    ------------------------------------------------------------------------------*/    
    this.displayResult = function() {

        var displayedCharacters = "";
        for (i = 0; i < hangman_word.length; i++) {
            var newGuess = new GuessCheck(this.hangman_word[i]);
            displayedCharacters = displayedCharacters + newGuess.displayCharacter();
        }
        return displayedCharacters;

    };
    /*------------------------------------------------------------------------------
        A function that takes a character as an argument and calls the guess function 
        on each letter object (the second function defined in Letter.js)
    ------------------------------------------------------------------------------*/    
    LetterToMatch = function(playerChoice) {
        var guess = "z";
        var underlying = "d";
        guess1 = new GuessCheck(guess, underlying);
        var choice = playerChoice;
        // guessedLetter(choice);
        // displayResult();
    };
};

newWordObject = new GuessCheck(playerChoice);
newWordObject.guessedLetter();
console.log(newWordObject.displayResult());

module.exports = MatchWord;