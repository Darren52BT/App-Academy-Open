const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//variable for holding number to guess
let secretNumber;
//variable for holding number of turns
let numTurns;



//ask for number of turns;
function askTurns() {
    rl.question("Enter the number of turns: ", (num) => {
        numTurns = Number(num)
        askRange();
    });
}
//asks for a range of numbers
function askRange() {
    askMax();
}

//asks for max
function askMax() {
    rl.question("Enter a max number: ", (num) => askMin(num))
}
//returns a random number between min and max, included
function randomInRange(min, max) {
    return Math.floor(Math.random() * max) + min;
}
//asks for min
function askMin(max) {
    rl.question("Enter a min number: ", (min) => {
        //prints out range
        console.log("I'm thinking of a number between " + min + " and " + max + "...");
        //generates random number
        secretNumber = randomInRange(Number(min), Number(max));
        //start game and ask for guesses
        askGuess();
    })
}
//asks user to enter a guess and checks it
function askGuess() {
    rl.question("Enter a guess: ", (num) => checkGuess(Number(num)));
}
//says whether guess is too high, too low, or correct
//if not correct, ask again
function checkGuess(num) {
    //decrement number of turns left
    numTurns--;
    if (num > secretNumber) {
        console.log("Too high");
    } else if (num < secretNumber) {
        console.log("Too low");
    } else {
        console.log("Correct!");
    }
    //print how many turns are left
    console.log(numTurns + " turns left");
    //if wrong guess
    if (num !== secretNumber) {
        //if there are no more turns, print lose message
        if (numTurns === 0) {
            console.log("You lose, the correct answer was " + secretNumber);
            rl.close();
        }
        //if there are more turns, continue guesses
        else {
            askGuess();
        }
        //if guess is correct, print win message
    } else {
        console.log("You Win!");
        rl.close();
    }
}

//start game
askTurns();
