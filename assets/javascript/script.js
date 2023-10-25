var container = document.getElementById("container");
var startButton = document.getElementById("start-button");
var contentArea = document.getElementById("content-area");
var questionEl = document.getElementById("question");
var timerEl = document.getElementById("timer");
var choiceList = document.getElementById("choice-list");
var theEnd = document.getElementById("the-end");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var highScores = document.getElementById("high-scores");
var scoreList = document.getElementById("score-list");
var goBack = document.getElementById("go-back");
var clearScores = document.getElementById("clear-scores");
var restart = document.getElementById("restart");
var currentQuestion = document.getElementById("current-question");
var finalScore = document.getElementById("final-score");
var score = 0;
var scoreArray = JSON.parse(localStorage.getItem("score")) || [];

let timeValue = 60;
let questionCount = 0;
let questionNumber = 1;
let timeInterval;
let widthValue = 0;

var initialsValue;

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  theEnd.style.display = "none";
  highScores.style.display = "block";

  initialsValue = initials.value;
  var scoreString = "";

  for (var i = 0; i < scoreArray.length; i++) {
    scoreString +=
      "Initials: " + initialsValue + " - Score: " + score[i] + "<br>";
  }

  scoreList.innerHTML = scoreString;
});

function nextQuestion() {
  questionCount++;
  if (questionCount >= questions.length) {
    continueOn();
    clearInterval(timeInterval);
  } else {
    displayQuestion();
  }
}

function displayQuestion() {
  currentQuestion.textContent = questions[questionCount].question;

  while (choiceList.firstChild) {
    choiceList.removeChild(choiceList.firstChild);
  }

  for (let i = 0; i < questions[questionCount].options.length; i++) {
    var newBtn = document.createElement("button");
    newBtn.textContent = questions[questionCount].options[i];

    newBtn.addEventListener("click", function (event) {
      event.preventDefault();
      var userChoice = questions[questionCount].userChoice;

      if (event.target.textContent !== userChoice) {
        timeValue -= 10;
        if (timeValue <= 0) {
          clearInterval(timeInterval);
          continueOn();
        }
      } else {
        score += 10;
      }
      nextQuestion();
    });
    choiceList.appendChild(newBtn);
  }
}

function continueOn() {
  contentArea.style.display = "none";
  theEnd.style.display = "block";
  finalScore.textContent = "Your final score is " + score;

  finalScore = [];

  scoreArray.push(score);
  localStorage.setItem("score", JSON.stringify(scoreArray));
}

document
  .getElementById("start-button")
  .addEventListener("click", function (event) {
    container.style.display = "none";
    contentArea.style.display = "block";

    timeInterval = setInterval(function () {
      timeValue -= 1;

      if (timeValue < 0) {
        clearInterval(timeInterval);
        continueOn();
      }

      timerEl.textContent = timeValue;
    }, 1000);

    displayQuestion();
  });

restart.addEventListener("click", function (event) {
  location.reload();
});

goBack.addEventListener("click", function (event) {
  highScores.style.display = "none";
  container.style.display = "block";
});

clearScores.addEventListener("click", function (event) {
  localStorage.clear("score");
  scoreList.innerHTML = "";
});
