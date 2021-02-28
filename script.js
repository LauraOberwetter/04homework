var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector("#timer-count");
// timer vars
// content display
var startScreenEl = document.querySelector("#start-screen");
var quizScreenEl = document.querySelector("#quiz-screen");
var result = document.querySelector("#resultNotification");
// Q and A
var questionEl = document.querySelector("#question");
var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");
var answer4 = document.querySelector("#a4");
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

// move to the next question on answer click
var quizOptions = [ // array
  { // object i = 0
    question: "what is my name",
    choice: ["Laura", "Lauren", "Laurie", "Laureli"],
    answer: "Laura",
  },

  { // object i = 1
    question: "what is my age",
    choice: [27, 22, 31, 24],
    answer: 24,
  },

  { // object i = 2
    question: "where am I from",
    choice: ["Madison", "Chicago", "Milwaukee", "NYC"],
    answer: "Madison",
  }

]

// loop through options on click
let i = 0;
btn.addEventListener("click", () => {
  
  console.log(event.target.textContent); 
  if (event.target.textContent === quizOptions[i].answer) {
    result.textContent = "Correct!";
    result.style.color = "lawngreen";
  } else {
    result.textContent = "Incorrect";
    result.style.color = "red";
    //deduct 10 seconds from the clock

  }

  questionEl.textContent = quizOptions[i].question; // THEN changes question
  answer1.textContent = quizOptions[i].choice[0];
  answer2.textContent = quizOptions[i].choice[1];
  answer3.textContent = quizOptions[i].choice[2];
  answer4.textContent = quizOptions[i].choice[3];
  console.log(quizOptions[i]);
  
  
  i++;
  

});





// data struture to hold questions/answers // loop an array of objects




//

// end data structure

// questions and answers





