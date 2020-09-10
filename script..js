console.log(
    "Hello World")

var highscoreEL = document.getElementById("highscores");
var timerEL = document.getElementById("timer");
var questionCont = document.getElementById("question-container");
var quizSummary = document.getElementById("quiz-summary");
var ansbtns = document.getElementById("answer-btns");
var startbtn = document.getElementById("start-button");
var buttonA = document.getElementById("a")
var buttonB = document.getElementById("b")
var buttonC = document.getElementById("c")
var buttonD = document.getElementById("d")
var questionEl = document.getElementById("questionsArray")
var openingStm = document.getElementById("opening-statement")
var formHigh = document.getElementById("highscore-form")
var submitName = document.getElementById("submit-Name")
var currentQuestIndex = 0
var score = 5

var timer = 80
var quizQuestions = [
    {
        Question: "Commonly used data types DO NOT include:",
        answerA: "Strings",
        answerB: "Booleans",
        answerC: "Alerts",
        answerD: "numbers",
        correct: "c",
    },

    {
        Question: "The condition in an if/else statment is enclosed within 2",
        answerA: "quotes",
        answerB: "curly brackets",
        answerC: "parentheses",
        answerD: "square brackets",
        correct: "c", 

    },

    {
        
        Question: "Arrays in JavaScript can be used to store:",
        answerA: "Numbers and Strings",
        answerB: "Other Arrays",
        answerC: "Boolean",
        answerD: "all of the above",
        correct: "d",

    }, 
    {
        
        Question: "What does CSS stand for?:",
        answerA: "Cascading Style Sheets",
        answerB: "Chili Con Carne",
        answerC: "Computer Science Sheet",
        answerD: "Cyber Sync Storage",
        correct: "a",

    }, 
    {
        
        Question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        answerA: "JavaScript",
        answerB: "terminal/bash",
        answerC: "for loops",
        answerD: "console log",
        correct: "d",

    }, 
]


startbtn.addEventListener("click", startQuiz);


function generateQuiz() {
    console.log("quiz")
    var currentQuestion = quizQuestions[currentQuestIndex];
    
    if (currentQuestIndex < 5) {
        questionEl.innerHTML = currentQuestion.Question;
        a.innerHTML = currentQuestion.answerA;
        b.innerHTML = currentQuestion.answerB;
        c.innerHTML = currentQuestion.answerC;
        d.innerHTML = currentQuestion.answerD;
    }

    else 
    {
        showResults()
    }

};

function startQuiz() {
    console.log("started");
    startbtn.classList.add("hide");
    questionCont.classList.add("hide");
    questionEl.classList.remove("hide");
    ansbtns.classList.remove("hide");
    generateQuiz();
    startTimer();
}


function answerCheck(choice) {
    
    var correctanswer = quizQuestions[currentQuestIndex].correct;

    if (choice === correctanswer) {
        console.log("correct answer"); 
        currentQuestIndex++;
        generateQuiz();
        console.log(score);
    }

    else {
        console.log("wrong answer");
        score--;
        timer = -20;
        currentQuestIndex++;
        generateQuiz();
        console.log(score);
    }
    

}

function showResults() {
    console.log("Results here");
    questionEl.classList.add("hide");
    ansbtns.classList.add("hide");
    questionCont.classList.remove("hide");
    questionCont.innerHTML = "<h1> All Done!! </h1> Your results is " + score + "/5";
    formHigh.classList.remove("hide");
    submitName.classList.remove("hide");
}

setInterval(startTimer, 1000);

function startTimer() {
    timerEL.textContent = timer + " seconds remaining";
    timer--;

    if (timer === 0) {
        timerEl.textContent = "";
        clearInterval(timeInterval);
    }
}
