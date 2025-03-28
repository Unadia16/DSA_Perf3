//UNADIA, AARUME XANDER BSCS-1B
//If Else If Activity
let userScore = prompt("Enter your score my friend:");//Creating a program that prompts the user to input their score.

//Using else if statements to assign grades based on the following criteria
if (userScore >= 90) {
    console.log("Excellent");
}else if (userScore >= 80 && userScore <= 89) {
    console.log("Good");
}else if (userScore >= 70 && userScore <= 79) {
    console.log("Fair");
}else{
    console.log("Needs Improvement");
}