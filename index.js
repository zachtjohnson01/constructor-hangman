var inquirer = require('inquirer');

var Word = require('./Word.js');

var figlet = require('figlet');

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

var question_count;
var choice;
var answer;
var chosen_word;


var intro = function() {
    figlet('Hangman - Parks and Rec', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        };
        console.log(data);
        set_game();
        display_word();
        guess_letter();

    });

};

var set_game = function() {
    question_count = 10;
    choice = (Math.floor(Math.random() * game.length));
    answer = game[choice];
    chosen_word = new Word(answer);
}


var display_word = function() {
    chosen_word.word();
    chosen_word.displayedword();
}

var guess_letter = function() {
    if (chosen_word.gameover === true) {
        console.log('You got it right! Next word!\n');
        chosen_word = {};
        set_game();
        display_word();
        guess_letter();
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
            } else {
                chosen_word.guesser(answers.letter)
                chosen_word.wins();
            };
            var a = answer.split('');
            if (a.includes(answers.letter.toUpperCase())) {
                console.log('\x1b[32m%s\x1b[0m','CORRECT!!!\n');
            } else {
                console.log('\x1b[31m%s\x1b[0m','INCORRECT!!!\n');
                question_count --;
                if (question_count === 1) {
                    console.log(`${question_count} guess remaining!!!\n`)
                } else {
                    console.log(`${question_count} guesses remaining!!!\n`)
                }
            };
            guess_letter();
        });
    }
}

intro();
