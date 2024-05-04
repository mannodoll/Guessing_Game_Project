import inquirer from "inquirer";
let guess = Math.floor(Math.random() * 10 + 1);
let guessNumber = await inquirer.prompt([
    {
        message: "Enter Your Number Between 1-10",
        type: "number",
        name: "yourguess",
    }
]);
if (guessNumber.yourguess === guess) {
    console.log("congratulations !!! Your Guess is Ri888888.........");
}
else {
    console.log("Opp's !! Your Guess is wrong...........");
}
