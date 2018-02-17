var inquirer = require("inquirer");


// Created a series of questions
inquirer.prompt([

    {
        type: "input",
        name: "letter",
        message: "Guess a letter!"
    },

    {
        type: "list",
        name: "doingWhat",
        message: "What are you doing in my house??",
        choices: ["I made you cookies!", "No lie dude. I'm here to rob you.", "Uh. This is my house... Who are YOU???"]
    },

    {
        type: "checkbox",
        name: "carryingWhat",
        message: "What are you carrying in your hands??",
        choices: ["TV", "Slice of Toast", "Butter Knife"]
    },

    {
        type: "confirm",
        name: "canLeave",
        message: "Can you leave now?"
    },

    {
        type: "password",
        name: "myPassword",
        message: "Okay fine. You can stay. But only if you say the magic password."
    }

]).then(function(user) {

    // If the user guesses the password...
    if (user.myPassword === "chicken") {

        console.log("==============================================");
        console.log("");
        console.log("Well a deal's a deal " + user.letter);
        console.log("You can stay as long as you like.");
        console.log("Just put down the " + user.carryingWhat + ". It's kind of freaking me out.");
        console.log("");
        console.log("==============================================");
    }  
    
    


  // This function is run whenever the user guesses a letter..
    updatePage: function(letter) {
      // If the user has no guesses left, restart the game.
      if (this.guessesLeft === 0) {
        this.restartGame();
      }
      // Otherwise...
      else {
        // Check for and handle incorrect guesses.
        this.updateGuesses(letter);
  
        // Check for and handle correct guesses.
        this.updateMatchedLetters(letter);
  
        // Rebuild the view of the word. Guessed letters are revealed, unguessed letters have a "_".
        this.rebuildWordView();
  
        // If the user wins, restart the game.
        if (this.updateWins() === true) {
          this.restartGame();
        }
      }
  
    }
  
  
    // This function governs what happens when the user makes an incorrect guess (that they haven't guessed before).
    updateGuesses: function(letter) {
      // If the letter is not in the guessedLetters array, and the letter is not in the lettersOfTheWord array..
      if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter) === -1)) {
  
        // Add the letter to the guessedLetters array.
        this.guessedLetters.push(letter);
  
        // Decrease guesses by one.
        this.guessesLeft--;
  
        // Update guesses remaining and guesses letters on the page.
        document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
        document.querySelector("#guessed-letters").innerHTML =
        this.guessedLetters.join(", ");
      }
    },
  
    // This function sets the initial guesses the user gets.
    processUpdateTotalGuesses: function() {
      // The user will get more guesses the longer the word is.
      this.totalGuesses = this.lettersOfTheWord.length + 5;
      this.guessesLeft = this.totalGuesses;
  
      // Render the guesses left to the page.
      document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
    },
  
  // This function governs what happens if the user makes a successful guess.
    updateMatchedLetters: function(letter) {
      // Loop through the letters of the "solution".
      for (var i = 0; i < this.lettersOfTheWord.length; i++) {
        // If the guessed letter is in the solution, and we haven't guessed it already..
        if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
          // Push the newly guessed letter into the matchedLetters array.
          this.matchedLetters.push(letter);
        }
      }
    },
  
    // Function that "restarts" the game by resetting all of the variables.
    restartGame: function() {
      document.querySelector("#guessed-letters").innerHTML = "";
      this.wordInPlay = null;
      this.lettersOfTheWord = [];
      this.matchedLetters = [];
      this.guessedLetters = [];
      this.guessesLeft = 0;
      this.totalGuesses = 0;
      this.letterGuessed = null;
      this.setupGame();
      this.rebuildWordView();
    },
  
    / Function that checks to see if the user has won.
    updateWins: function() {
      var win;
  
      // this won't work for words with double or triple letters
      // var lettersOfTheWordClone = this.lettersOfTheWord.slice(); //clones the array
      // this.matchedLetters.sort().join('') == lettersOfTheWordClone.sort().join('')
  
      // If you haven't correctly guessed a letter in the word yet, we set win to false.
      if (this.matchedLetters.length === 0) {
        win = false;
      }
      // Otherwise, we set win to true.
      else {
        win = true;
      }
  
      // If a letter appears in the lettersOfTheWord array, but not in the matchedLetters array, set win to false.
      // In English, if you haven't yet guessed all the letters in the word, you don't win yet.
      for (var i = 0; i < this.lettersOfTheWord.length; i++) {
        if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) === -1) {
          win = false;
        }
      }
  
      // If win is true...
      if (win) {
  
        // Increment wins.
        this.wins = this.wins + 1;
  
        // Update wins on the page.
        document.querySelector("#wins").innerHTML = this.wins;
  
        // Update the song title and band on the page.
        document.querySelector("#music").innerHTML = this.wordsToPick[this.wordInPlay].song +
        " By " + this.wordInPlay;
  
        // Update the image of the band on the page.
        document.querySelector("#bandDiv").innerHTML =
          "<img class='band-image' src='images/" +
          this.wordsToPick[this.wordInPlay].picture + "' alt='" +
          this.wordsToPick[this.wordInPlay].song + "'>";
  
        // Play an audio track of the band.
        var audio = new Audio(this.wordsToPick[this.wordInPlay].preview);
        audio.play();
  
        // return true, which will trigger the restart of our game in the updatePage function.
        return true;
      }
      // If win is false, return false to the updatePage function. The game goes on!
      return false;
    }
  };
  
  // Initialize the game when the page loads.
  hangmanGame.setupGame();
  
  // When a key is pressed..
  document.onkeyup = function(event) {
    // Capture pressed key and make it lowercase.
    hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    // Pass the guessed letter into our updatePage function to run the game logic.
    hangmanGame.updatePage(hangmanGame.letterGuessed);
  };
  