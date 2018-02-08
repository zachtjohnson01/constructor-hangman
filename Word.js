var inquirer = require('inquirer');

var Letter = require('./Letter.js');


module.exports = Word;
function Word(word) {
    // array of new Letter objects representing the letters of the underlying word
    this.word = word.split('').forEach(element => {
        new Letter(element);
    });
    // function that returns a string representing the word. This should call the function on each letter object that displays the character or an underscore and concatenate those together (first function in Letter.js)

    // function that takes a character as an argument and calls the guess function on each letter object (second function in Letter.js)
}


