//UNADI, AARUME XANDER BSCS-1B
//Do-While Loop Activity
let pass_word = 'correctPassword';//Declaring the correct password
let inputPassword;//Declaring a variable

//Use a do-while loop to keep asking for the password until it matches the correct one.
do {
    inputPassword = prompt("Enter your password:");
    
    //Using if else statement if the password is incorrect.
    if (inputPassword !== pass_word) {
        console.log("Incorrect, try again.");
    }
} while (inputPassword !== pass_word);

console.log("Access granted.");