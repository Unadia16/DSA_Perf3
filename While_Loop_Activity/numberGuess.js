//UNADI, AARUME XANDER BSCS-1B
//While Loop Activity
let number = 3; //Declaring the given number to guess.
let guess;//Declaring a variable.

//Using while loop to keep asking until the user guesses the correct number.
while (guess != number) {
    guess = prompt("Guess a number between 1 and 10:");
    
    //USing if else statement to identify if the guessed number is too high, too low, or correct.
    if (guess > number) {
        alert("Too high!");
    } else if (guess < number) {
        alert("Too low!");
    } else {
        alert("Correct!");
    }
}