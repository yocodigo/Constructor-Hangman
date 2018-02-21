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
        LetterToMatch(hangmanLetterArray);
        // return hangmanLetterArray;
    };
    /*------------------------------------------------------------------------------
        A function that returns a string representing the word. This should call the 
        function on each letter object (the first function defined in Letter.js) that 
        displays the character or an underscore and concatenate those together.
    ------------------------------------------------------------------------------*/    
    this.displayResult = function() {
        var displayedCharacters = "";
        for (i = 0; i < hangman_word.length; i++) {
            displayedCharacters = displayedCharacters + newGuess.displayCharacter(); //displayCharacter() is the first function in Letter.js
        }
        console.log(displayedCharacters);
    };
    /*------------------------------------------------------------------------------
        A function that takes a character as an argument and calls the guess function 
        on each letter object (the second function defined in Letter.js)
    ------------------------------------------------------------------------------*/    
    LetterToMatch = function(LetterArray) {
        for (i = 0; i < LetterArray.length; i++) {
            newLetterObject = new GuessCheck(LetterArray[i]);
            return newLetterObject;
            console.log(newLetterObject.LetterToMatch());
            newLetterObject.guessedLetter();
        };
    };
};    
//FOR TESTING PURPOSES
newWordObject = new MatchWord(hangman_word);
newWordObject.underlyingLetterArray(); //Run the underlyingLetterArray function
// console.log(newWordObject.displayResult());
module.exports = MatchWord;