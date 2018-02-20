//REQUIRED PACKAGES
var GuessCheck = require("./letter.js");

//TEMP GLOBAL VARIABLES
var hangman_word = "car"; //will come from game.js
var testPlayerChoice = "z";//will come from game.js


/*------------------------------------------------------------------------------------
                                WORD CONSTRUCTOR
    (creates an object representing the current word the user is attempting to guess)
--------------------------------------------------------------------------------------*/
var MatchWord = function(hangman_word) {
    // An array of new Letter objects representing the letters of the underlying word
    this.underlyingLetterArray = function() {
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
            displayedCharacters = displayedCharacters + newGuess.displayCharacter(); //displayCharacter() is the first function in Letter.js
        }
        return displayedCharacters;

    };
    /*------------------------------------------------------------------------------
        A function that takes a character as an argument and calls the guess function 
        on each letter object (the second function defined in Letter.js)
    ------------------------------------------------------------------------------*/    
    LetterToMatch = function(testPlayerChoice) {
        for (i = 0; i < this.underlyingLetterArray.length; i++) {
            //pass underlying character from this.underlyingLetterArray
            
            var playerChoice = testPlayerChoice;
            var newGuess = new GuessCheck(this.underlyingLetterArray[i]); // put this in game.js
            newGuess.guessedLetter(playerChoice);
    };
};

newWordObject = new GuessCheck(testPlayerChoice);
newWordObject.guessedLetter();
console.log(newWordObject.displayResult());

module.exports = MatchWord;