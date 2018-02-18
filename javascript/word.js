// Contains a constructor, Word that depends on the Letter constructor. This is used to 
//create an object representing the current word the user is attempting to guess. 
//That means the constructor should define:

var MatchWord = function(d, e, f) {
    // An array of new Letter objects representing the letters of the underlying word
    underlyingWord: [],      
    


    // A function that returns a string representing the word. This should call the 
    //function on each letter object (the first function defined in Letter.js) that 
    //displays the character or an underscore and concatenate those together.
    word = function() {
        for (i = 0; i < word.length; i++) {
           var newGuess = new GuessCheck("c");
           console.log() 
        }       
        displayCharacter();
    },
    
    // A function that takes a character as an argument and calls the guess function 
    //on each letter object (the second function defined in Letter.js)
    word3: function(character) {
        
        guessedLetter();
    }

};

module.exports(HangmanWord);