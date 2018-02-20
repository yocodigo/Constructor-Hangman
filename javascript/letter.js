/*------------------------------------------------------------------------------------
                                LETTER CONSTRUCTOR
    (displays an underlying character or a blank placeholder (such as an underscore),
          depending on whether or not the user has guessed the letter)
--------------------------------------------------------------------------------------*/
var GuessCheck = function(underlying) {
    // A string value to store the underlying character for the letter
    this.underlying = underlying;
    // A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
    // A function that returns the underlying character if the letter has been 
    //guessed, or a placeholder (like an underscore) if the letter has not been 
    //guessed
    this.displayCharacter = function() {
        if (this.guessed) {
            // this.underlying; //If the response from the user entered(user.letter) is correct, assign to this.character
            return GuessCheck.underlying;
            console.log(GuessCheck.underlying);
            console.log("CORRECT!");
        }
        else {
            this.underlying = "_";
            return GuessCheck.underlying;
            // console.log(GuessCheck.underlying);
            console.log("INCORRECT!");
        }
    };
    // A function that takes a character as an argument and checks it against the 
    //underlying character, updating the stored boolean value to true if it was 
    //guessed correctly
    this.guessedLetter = function() {
        if (guess === this.underlying) {
            this.guessed = true;
            return true;
        }
        else {
            this.guessed = false;
            return false;
        }
    };
    this.guessedLetter(guess);
    this.displayCharacter();
};
var guess = "z";
var underlying = "d";
guess1 = new GuessCheck(guess, underlying);
// console.log(guess1.underlying);

module.exports = GuessCheck;