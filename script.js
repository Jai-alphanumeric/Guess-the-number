"use strict";
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20+1);
    console.log(secretNumber);
    document.querySelector(".number").textContent = '?';
    document.querySelector(".guess").value = '';
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector(".number").style.animation = 'none' ;
    document.querySelector("body").style.animation = 'none';
    document.querySelector(".number").style.fontSize = '3rem' ;
})

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number Generated";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.animation = 'aurora 5s ease-in-out infinite' ;
    document.querySelector(".number").style.fontSize = '6rem' ;
    document.querySelector("body").style.animation =
    "aurora-bg 5s ease-in-out 1";
    if(score > highscore){
        document.querySelector('.highscore').textContent = score;
        highscore= score;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Suck at this";
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Suck at this";
    }
  }
});
