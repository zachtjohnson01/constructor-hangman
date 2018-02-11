// dependency for inquirer npm package
var inquirer = require('inquirer');

// create Letter constructor to display either character or underscore
module.exports = Letter;
function Letter(character) {
    // string value to store the underlying character for the letter
    this.character = character;
    // boolean value that stores whether that letter has been guessed yet
    this.guessed;
    // function that returns underlying character if the letter has been guessed, or underscore if letter hasn't been guessed
    this.show = function() {
        if (this.guessed) {
            return this.character
        } else if (this.character === " ") {
            return " ";
            this.guessed = true;
        } else {
            return '_'
        }
    };
    // function that takes a character as an agrument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.correct = function(guessedcharacter) {
        // console.log(this.character);
        // console.log(guessedcharacter);
        if (this.character === guessedcharacter.toUpperCase()) {
            this.guessed = true;
            this.show()
        } else {
            this.show()
        }
    };
}