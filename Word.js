var inquirer = require('inquirer');

var Letter = require('./Letter.js');


var array_word;

module.exports = Word;
function Word(word) {
    // array of new Letter objects representing the letters of the underlying word
    this.word = function() {
        console.log('----WORD----');
        array_word = [];
        word.split('').forEach((element,i) => {
            var a = new Letter(element);
            array_word.push(a);
        })
    };
    // function that returns a string representing the word. This should call the function on each letter object that displays the character or an underscore and concatenate those together (first function in Letter.js)
    this.displayedword = function() {
        console.log('----DISPLAYEDWORD----');
        var c = [];
        var b = array_word.forEach((element,i) => {
            c.push(element.show());
        });
        console.log(c.join(' '));
    }

    // function that takes a character as an argument and calls the guess function on each letter object (second function in Letter.js)
    this.guesser = function(guessedcharacter) {
        console.log('----GUESSER----');
        // console.log(guessedcharacter);
        // console.log(array_word);
        this.word();
        array_word.forEach((element,i) => {
            element.correct(guessedcharacter)
        })
        this.displayedword();
    }
}


// console.log(array_word)