var inquirer = require('inquirer');

var Word = require('./Word.js');

var game = ["PAWNEE",
            "LESLIE KNOPE",
            "RON SWANSON",
            "LIL SEBASTIAN",
            "APRIL LUDGATE",
            "BEN WYATT",
            "TOM HAVERFORD",
            "MOUSERAT",
            "JERRY GERGICH",
            "ANDY DWYER",
            "CHAMPION",
            "CHRIS TRAEGER",
            "EAGLETON",
            "ANN PERKINS",
            "DONNA MEAGLE"];
var choice = (Math.floor(Math.random() * game.length));
var answer = game[choice];
var chosen_word = new Word(answer);

// console.log(chosen_word.word());

inquirer.prompt([
    {
        name: 'letter',
        message: 'Guess a letter!'
    }
]).then(function(answers) {
    chosen_word.guesser(answers.letter)
    })