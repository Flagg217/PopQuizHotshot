var container = document.getElementById("container");
var startButton = document.getElementById("start-button");
var contentArea = document.getElementById("content-area");
var questionEl = document.getElementById("question");
var timerEl = document.getElementById("timer");
var choiceList = document.getElementById("choice-list");
var theEnd = document.getElementById("the-end");
var initials = document.getElementById("initials");
var submitButton = document.getElementById("submit-button");
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
let timerInterval;

document.getElementById("submit-button").addEventListener("click", function (event) {
    event.preventDefault();
    theEnd.style.display = "none";
    highScores.style.display = "block";

    goBack.style.display = "block";
    clearScores.style.display = "block";

    var scores = JSON.parse(localStorage.getItem("score")) || [];
    var initials = initials.value;

    var scoreString = "";
    for (var i = 0; i < scores.length; i++) {
        scoreString += "Initials: " + initials.value + " - Score: " + scores[i] + "<br>";
    }

    scoreList.innerHTML = scoreString;
});


