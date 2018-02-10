// dependency for inquirer npm package
var inquirer = require('inquirer');

// create Letter constructor to display either character or underscore
module.exports = Letter;
function Letter(character) {
    // string value to store the underlying character for the letter
    this.character = character;
    // boolean value that stores whether that letter has been guessed yet
    this.guessed
    // function that returns underlying character if the letter has been guessed, or underscore if letter hasn't been guessed
    this.show = function() {
        if (this.guessed) {
            return this.character
        } else {
            return '_'
        }
    }
    // function that takes a character as an agrument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.correct = function(guessedcharacter) {
        // console.log(this.character);
        // console.log(guessedcharacter);
        if (this.character === guessedcharacter) {
            console.log(true);
            this.guessed = true;
            this.show()
        } else {
            console.log(false);
            this.guessed = false;
            this.show()
        }
    }
}




// recursive function which will store the guessed letters

// inquirer.prompt([
//     {
//         name: 'character',
//         message: 'Guess a letter!'
//     }
// ]).then(function(answers) {
//     var guess = new Letter(answers.character)
//     exports.guess;
//     console.log(guess);
// })