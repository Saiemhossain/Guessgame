//generating a random number

let rendomNum = Math.floor(Math.random() * 20 + 1);
let guessNum = (document.getElementById("guess").textContent = rendomNum);

//status area

let rightMessage = document.querySelector(".message");
let wrongMessage = document.querySelector(".message");

//win image

let winImage = document.getElementById("win");

//hiding image

let hidingImage = document.getElementById("hide");

//reset button

let resetBtn = document.querySelector("#again").addEventListener("click", () => {
  location.reload();
});

//storinf final result

let finalResult = document.getElementById("score");
let initialScore = 0;

//varifaing output

let inputBtn = document.getElementById("input");
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
  
  //generating final attampt

  initialScore++;
  finalResult.textContent = initialScore;

  let guessOutput = inputBtn.value;
  if (guessOutput == guessNum) {
    rightMessage.textContent = "🎉 Correct Number";
    winImage.style.display = "block";
  } else if (guessOutput < guessNum) {
    wrongMessage.textContent = "😒 Its Low Number";
    winImage.style.display = "none";
    hidingImage.style.backgroundImage = "url('img/sad.png')";
  } else if (guessOutput > guessNum) {
    wrongMessage.textContent = "😎 Its High Number";
    winImage.style.display = "none";
    hidingImage.style.backgroundImage = "url('img/happy.png')";
  }

});

