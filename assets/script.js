var countDown = questions.length * 15;
var currentQuestions = 0;

var startButton = document.querySelector("#start-button")
var timerEl = document.querySelector("#time")
var questionsEl = document.querySelector("#quizquestion")
var questionChoice = document.querySelector("#choices")


function countDownTimer() {
    countDown.setInerval(1000)
    timerEL.textContent(countDown)
}





function start () {
    var startScreenHider = document.querySelector("startScreen")
    var showFirstQuestion = document.querySelector("#quizstart")
    showFirstQuestion.removeAttribute('class')
    startScreen.setAttribute('class', "hide");
    setCurrentQuestion();
    countDownTimer();
}

function setCurrentQuestion () {
    var startQuestions = questions[currentQuestions];
    var title = document.querySelector("#quizquestion")
    title.textContent = startQuestions.question;
    
    for(var i = 0; i < startQuestions.choices.length; i++) {
        var currentChoice = document.createElement("button");
        currentChoice.setAttribute("class", 'choices');
        currentChoice.setAttribute("value", startQuestions.choices[i])
        currentChoice.textContent= i + 1 + ". " + startQuestions.choices[i];
        if (i == 0 && questionChoice.children.length > 0) {
            questionChoice.innerHTML = "";
        }
        questionChoice.appendChild(currentChoice);
        currentChoice.onclick = answerCheck;
    }

}

function answerCheck (value) {
    console.log(value)
    currentQuestions++;
    if (currentQuestions < 5) {
    setCurrentQuestion();
    }
}

startButton.onclick = start; 

