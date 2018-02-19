/*------------------------------------------------------------------------------------
                                WORD CONSTRUCTOR
    (creates an object representing the current word the user is attempting to guess)
--------------------------------------------------------------------------------------*/
var MatchWord = function(hangman_word) {
    // An array of new Letter objects representing the letters of the underlying word
    underlyingWord = function() {
        var splitWord = hangman_word.split("");
    },    
/*-----------------------------------------------------------------------------------
     A function that returns a string representing the word. This should call the 
    function on each letter object (the first function defined in Letter.js) that 
    displays the character or an underscore and concatenate those together.
-----------------------------------------------------------------------------------*/    
    displayResult = function() {
        displayedCharacters = "";
        for (i = 0; i < hangman_word.length; i++) {
            var newGuess = new GuessCheck(splitWord[i]);
            displayedCharacters = displayedCharacters + newGuess.displayCharacter();
        }
    },
/*-----------------------------------------------------------------------------------
    A function that takes a character as an argument and calls the guess function 
    on each letter object (the second function defined in Letter.js)
-----------------------------------------------------------------------------------*/    
    LetterToMatch = function(playerChoice) {
        choice = playerChoice
        guessedLetter(choice);
        displayResult();
    }

};

//temporary global variables
var hangman_word = "car"; //will come from game.js
var character = "c"; //will come from game.js
newWordObject = new MatchWord(hangman_word);
newWordObject(newWordObject.);

module.exports(MatchWord);