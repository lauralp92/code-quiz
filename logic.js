//  Global Variables
var score = 0;
var timer = "";
var startBtn = document
  .getElementById("start")
  .addEventListener("click", start);

// function that starts quiz onclick
function startQuiz(event) {
  currentQuestion = 0;
  questionTitle.innerHTML = questions[currentQuestion].question;
}

var time = 60;
var interval = setInterval(function () {
  document.getElementById("timer");
  timer--;
  if (timer === 0) {
    clearInterval(interval);
    document.getElementById("end-score");
  }
});
