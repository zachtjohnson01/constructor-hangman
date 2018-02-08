var inquirer = require('inquirer');

var Word = require('./Word.js');



inquirer.prompt([
    {
        name: 'word',
        message: 'Guess a letter!'
    }
]).then(function(answers) {
    var guess = new Word(answers.word)
    console.log(guess);
})