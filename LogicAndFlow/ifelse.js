if (1!==1) {
console.log("it's true");
}

//ex 2

let rating = 5;

if(rating === 3){
    console.log("You are a superstar");
} else if (rating === 2) {
    console.log("meets expectations");
} else if (rating === 1) {
    console.log("needs improvement");
} else {
    console.log("invalid");
}

//ex 3

let num = 37;

if (num % 2 !==0){
    console.log("odd number");
}

//ex 4

let highScore =1430;
let userScore = 1200;

if (userScore >= highScore) {
    console.log(`Congrats you have new high score of ${userScore}`);
} else {
    console.log (`Good game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}