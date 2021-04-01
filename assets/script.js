var countDown = questions.length * 15
var currentQuestions = 0;

var startButton = document.querySelector("#start-button")
var timerEl = document.querySelector("#time")
var questionsEl = document.querySelector("#quizquestion")
var questionChoice = document.querySelector("#choices")


function start () {
    var startScreenHider = document.querySelector("startScreen")

    startScreen.setAttribute('class', "hide");
    
}


startButton.onclick = start;