let secret = Math.floor(Math.random() * 10) + 1;
let guess = +prompt("Guess the number from 1 to 10");
if (guess >= 1 && guess <= 10) {
    if (guess == secret) {
        console.log("Congratulations, you guessed right");
    } else if (guess < secret) {
        console.log("few");
    } else {
        console.log("a lot of");
    }
}

