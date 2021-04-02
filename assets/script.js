var countDown = questions.length * 15;
var borgTimer;
var currentQuestions = 0;

var submitBtn = document.querySelector("submitButton")
var startButton = document.querySelector("#start-button")
var timerEl = document.querySelector("#time")
var questionsEl = document.querySelector("#quizquestion")
var questionChoice = document.querySelector("#choices")

// countdown interval?
function countDownTimer() {
    borgTimer = setInterval(timer, 1000);
}
// ...its a timer
function timer () {
    if (countDown > 0) {
    countDown -= 1;
    timerEl.textContent= " " + (countDown);
    }
}
// starts the quiz
function start () {
    var startScreenHider = document.querySelector("startScreen")

    var showFirstQuestion = document.querySelector("#quizstart")
    showFirstQuestion.removeAttribute('class')
    startScreen.setAttribute('class', "hide");
    setCurrentQuestion();
    countDownTimer();
}
// gets next question
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
// compare to see if your answer is correct or not
function answerCheck (value) {
    var borgshardvalue = value.currentTarget.innerText
    borgshardvalue = borgshardvalue.substring("3")
    if (questions[currentQuestions].answer != borgshardvalue) {
        countDown -= 11
    }
    currentQuestions++;
    if (currentQuestions < 5) {
    setCurrentQuestion();
    }
    console.log(value)

    if (currentQuestions == 5) {
        var quizEnd = document.querySelector("#quizstart");
        var highScore = document.querySelector("#highscore-screen")
        var actualScore = document.querySelector("#dumbscore")
        quizEnd.setAttribute('class', "hide");
        clearInterval(borgTimer);
        timerEl.setAttribute('class', "hide")
        highScore.removeAttribute('class')
        actualScore.textContent += countDown;
    }
}


// start the quiz
startButton.onclick = start; 


// submit highscore to storage
function submit() {
    var input = document.querySelector("#imright").value;
    submitBtn.onclick = function submit() {
        localStorage.setItem("#imright", input.value);
        console.log(input);
        }
}

