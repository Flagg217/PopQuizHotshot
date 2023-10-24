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
var scoreArray = JSON.parse(localStorage.getItem("scoreArray")) || [];


