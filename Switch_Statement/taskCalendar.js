//UNADIA, AARUME XANDER BSCS-1B
//Switch Statement Activity
let user_input_day = prompt("Enter a day of the week (e.g., Monday, Tuesday).");//Creating a program that prompts the user to enter a day of the week.

//Using a switch statement to map each day to a specific task. Including a default case for any unexpected inputs.
switch(user_input_day) {
    case "Monday":
        console.log("Your task for Monday is: Finish your assignments.");
        break;
    case "Tuesday":
        console.log("Your task for Tuesday is: Clean Your Room.");
        break;
    case "Wednesday":
        console.log("Your task for Wednesday is: Review your notes in DSA.");
        break;
    case "Thursday":
        console.log("Your task for Thursday is: Practice your programming skills.");
        break;
    case "Friday":
        console.log("Your task for Friday is: Do some exercise like Basketball.");
        break;
    default:
        console.log("Your task for Sat and Sun is: Enjoy your time with your Family");                        
        break;
}       