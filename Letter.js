// dependency for inquirer npm package
var inquirer = require('inquirer');

// create Letter constructor to display either character or underscore
module.exports = Letter;
function Letter(character) {
    // string value to store the underlying character for the letter
    this.character = character;
    // boolean value that stores whether that letter has been guessed yet
    this.guessed = function(){
        console.log('guessed');
    }
    // function that returns underlying character if the letter has been guessed, or underscore if letter hasn't been guessed
    this.show = function() {
        console.log('show');
    }
    // function that takes a character as an agrument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.correct = function() {
        console.log('correct');
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