var container = document.getElementById("container");
var startButton = document.getElementById("start-button");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("question-screen");
var endScreen = document.getElementById("end-screen");
var submitButton = document.getElementById("submit-button");
var highScoreEl = document.getElementById("high-score");
var highScoreScreen = document.getElementById("high-score-screen");
var highScoreList = document.getElementById("high-score-list");
var highScoreButton = document.getElementById("high-score-button");
var clearButton = document.getElementById("clear-button");
var backButton = document.getElementById("back-button");
var restartButton = document.getElementById("restart-button");
var questionNumber = 0;
var score = 0;
var scoreList = JSON.parse(localStorage.getItem("scoreList")) || [];

let timeValue = 60;
let questionTime = 10;
let questionCounter = 0;
let timer;
let score = 0;

// Start the quiz
function startQuiz() {
    startScreen.classList.add("hide");
    questionScreen.classList.remove("hide");
    timer = setInterval(startTimer, 1000);
    startTimer();
    showQuestions();
}

// Start the timer
function startTimer() {
    timeValue--;
    timerEl.textContent = timeValue;
    if (timeValue <= 0) {
        endQuiz();
    }
}

// Show the questions
function showQuestions() {
    if (questionCounter >= questions.length) {
        endQuiz();
    } else {
        questionEl.textContent = questions[questionCounter].question;
        answerEl.innerHTML = "";
        for (let i = 0; i < questions[questionCounter].options.length; i++) {
            let option = document.createElement("button");
            option.textContent = questions[questionCounter].options[i];
            option.setAttribute("class", "btn btn-primary btn-lg btn-block");
            option.onclick = checkAnswer;
            answerEl.appendChild(option);
        }
    }
}

// Check the answer
function checkAnswer() {
    if (this.textContent === questions[questionCounter].answer) {
        score++;
    } else {
        timeValue -= 10;
    }
    questionCounter++;
    showQuestions();
}

// End the quiz
function endQuiz() {
    clearInterval(timer);
    questionScreen.classList.add("hide");
    endScreen.classList.remove("hide");
    scoreEl.textContent = score;
}

// Submit the score
function submitScore() {
    let initials = document.getElementById("initials").value;
    scoreList.push({ initials: initials, score: score });
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
    showHighScores();
}

// Show the high scores
function showHighScores() {
    endScreen.classList.add("hide");
    highScoreScreen.classList.remove("hide");
    highScoreList.innerHTML = "";
    for (let i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = scoreList[i].initials + " - " + scoreList[i].score;
        highScoreList.appendChild(li);
    }
}

// Clear the high scores
function clearHighScores() {
    localStorage.clear();
    scoreList = [];
    showHighScores();
}

// Go back to the start screen
function goBack() {
    highScoreScreen.classList.add("hide");
    startScreen.classList.remove("hide");
    timeValue = 60;
    questionCounter = 0;
    score = 0;
}

// Restart the quiz
function restartQuiz() {
    highScoreScreen.classList.add("hide");
    startScreen.classList.remove("hide");
    timeValue = 60;
    questionCounter = 0;
    score = 0;
}

// Event listeners
startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submitScore);
highScoreButton.addEventListener("click", showHighScores);
clearButton.addEventListener("click", clearHighScores);
backButton.addEventListener("click", goBack);
restartButton.addEventListener("click", restartQuiz);


