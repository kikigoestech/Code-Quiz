// dom elements

var questionsEL = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEL = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var initialsEL = document.querySelector("#initials");
var feedbackEL = document.querySelector("#feedback");

// quiz state variables

var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

function startQuiz() {
    var startscreenEl = document.getElementById("start-screen");
    startscreenEl.setAttribute("class", "hide");

    questionsEL.removeAttribute("class");

    timerId = setInterval(clockTick, 1000);
    timerEl.textContent= time;
    
    getQuestion();
}

function getQuestion() {
    // get current question from array
    var currentQuestion = questions[currentQuestionIndex];

    var titleEL = document.getElementById("question-title");
    titleEL.textContent = currentQuestion.title;

    choicesEL.innerHTML = "";
//loop over choices
currentQuestion.choices.forEach(function(choice, i) {

    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", "choice");

    choice.textContent = i + 1 + "." + choice;

    //attach click event listener to each choice
    choiceNode.onclick = questionClick;

    //display on page
    choicesEL.appendChild(choiceNode);
}); 
}



















startBtn.onclick = startQuiz;

initialsEL.onkeyup = checkForEnter; 
