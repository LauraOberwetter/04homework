var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector("#timer-count");
// timer vars
// content display
var startScreenEl = document.querySelector("#start-screen");
var quizScreenEl = document.querySelector("#quiz-screen");
// Q and A
var questionEl = document.querySelector("#question");
var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");
var answer4 = document.querySelector("#a4");
var answer5 = document.querySelector("#a5");
var btn = document.querySelector(".btn");


var timer;
var timerCount;


startButton.addEventListener("click", startQuiz); //start game by clicking start function


function startQuiz() { //quiz start function
    quizScreenEl.style.display = "inline"; //show the quiz screen
    startScreenEl.style.display = "none"; //hide the start screen 
    startButton.style.display = "none"; // hide start button

  //start the timer
}


btn.addEventListener("click", nextQuestion); // click any of the buttons, move to the next question

function nextQuestion() { // make function to change the question and the answer choices
  for (var i = 0; i < questions.length; i++) {
    questionEl.innerHTML = questions[i];
  }
}; 





// data struture to hold questions/answers // loop an array of objects




//

// end data structure

// questions and answers





var quizOptions = [ // array
  { // objects
    question: "what is my name",
    choice: ["Laura", "Lauren", "Laurie", "Laureli"],
    answer: "Laura",
  },

  {
    question: "what is my age",
    choice: [27, 22, 31, 24],
    answer: 24,
  },

  {
    question: "where am I from",
    choice: ["Madison", "Chicago", "Milwaukee", "NYC"],
    answer: "Madison",
  }

]