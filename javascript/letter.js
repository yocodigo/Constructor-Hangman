// Contains a constructor, Letter. This constructor should be able to either 
//display an underlying character or a blank placeholder (such as an underscore),
//depending on whether or not the user has guessed the letter. That means the 
//constructor should define:

var LetterGuessed = function(a, b, c) {
    // A string value to store the underlying character for the letter
    this.character = "",
    
    // A boolean value that stores whether that letter has been guessed yet
    this.hasGuessed = false,
    
    // A function that returns the underlying character if the letter has been 
    //guessed, or a placeholder (like an underscore) if the letter has not been 
    //guessed
    this.displayCharacter = function() {
        if (this.hasGuessed) {
            return this.characgter = user.letter; //whatever the response from the inquirer questions
            console.log("Correct!");
        }
        else {
            return 
            console.log("INCORRECT!");
        }
    },

    // A function that takes a character as an argument and checks it against the 
    //underlying character, updating the stored boolean value to true if it was 
    //guessed correctly
    this.guessedLetter = function() {
        if ()
    }
};

module.exports(LetterGuessed);