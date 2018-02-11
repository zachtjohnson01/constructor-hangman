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

var question_count = 10;


var display_word = function() {
    chosen_word.word();
    chosen_word.displayedword();
}

var guess_letter = function() {
    if (chosen_word.gameover === true) {
        console.log('YOU WIN!!!');
    } else if (question_count >= 1) {
        inquirer.prompt([
            {
                name: 'letter',
                message: 'Guess a letter!'
            }
        ]).then(function(answers) {
            if (question_count > 9) {
                chosen_word.guesser(answers.letter)
                chosen_word.wins();
                // guess_letter();
            } else {
                // chosen_word.wins();
                chosen_word.guesser(answers.letter)
                chosen_word.wins();
                // guess_letter();
            };
            var a = answer.split('');
            if (a.includes(answers.letter.toUpperCase())) {
                console.log('CORRECT!!!');
            } else {
                console.log('INCORRECT!!!');
                question_count --;
                if (question_count === 1) {
                    console.log(`${question_count} guess remaining!!!`)
                } else {
                    console.log(`${question_count} guesses remaining!!!`)
                }
            };
            guess_letter();
        });
    }
}

display_word();
guess_letter();