var startButton = document.querySelector("#start-button");

// timer vars
var countdownEl = document.querySelector("#countdown");
var seconds = 59;

// content display vars
var startScreenEl = document.querySelector("#start-screen");
var quizScreenEl = document.querySelector("#quiz-screen");
var endScreenEl = document.querySelector("#end-screen");
var result = document.querySelector("#resultNotification");

// Q & A vars
var questionEl = document.querySelector("#question");
var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");
var answer4 = document.querySelector("#a4");
var btn = document.querySelector(".btn");

// score vars
var points = document.querySelector("#points");
points = 0;
var endButton = document.querySelector("#enter");
var initials = document.querySelector("#initials");

// functions
function renderQuestion() {
  questionEl.textContent = quizOptions[i].question;
  answer1.textContent = quizOptions[i].choice[0];
  answer2.textContent = quizOptions[i].choice[1];
  answer3.textContent = quizOptions[i].choice[2];
  answer4.textContent = quizOptions[i].choice[3];
}


function countdownTimer() {
  var interval = setInterval(function () {
    countdownEl.innerHTML = "Seconds Left: " + seconds;
    seconds--;
    if (seconds === 0) {
      clearInterval(interval);
      countdownEl.innerHTML = "Time's Up!";
      result.textContent = "Time's Up!";
      result.style.color = "red";
    }
  }, 1000);

}

function showEnd () {
  endScreenEl.style.display = "inline"; // display end screen
  startScreenEl.style.display = "none"; //hide the start screen 
  quizScreenEl.style.display = "inline"; //show the quiz screen

  points.textContent = points; // show score
  console.log("score = " + points);

  renderInitialInput();
}


function renderInitialInput() {
   var input = document.createElement("INPUT");
   x.setAttribute("type", "text");
   x.setAttribute("value", "Enter initials here");
   document.body.appendChild(x);
 } 

// START QUIZ
window.addEventListener("load", hideEnd);
function hideEnd() {
  endScreenEl.style.display = "none";
}


startButton.addEventListener("click", startQuiz); //start game by clicking start function
function startQuiz() { //quiz start function initiated by start button

  quizScreenEl.style.display = "inline"; //show the quiz screen
  startScreenEl.style.display = "none"; //hide the start screen 
  startButton.style.display = "none"; // hide start button
  endScreenEl.style.display = "none"; // hide start button

  renderQuestion() // populate questions and answer choices

  countdownTimer() // start countdown
}

// QUESTIONS
var quizOptions = [
  { // object i = 0
    question: "A _____ takes an input and returns an output by performing a task or calculating a value",
    choice: ["function", "method", "boolean", "jquery"],
    answer: "function",
  },

  { // object i = 1
    question: "what is an example of a boolean value",
    choice: ["truthy", "falsey", "true", "yes"],
    answer: "true",
  },

  { // object i = 2
    question: "JavaScript is a _____",
    choice: ["Programming Language", "Rainforest", "DOM", "Browser"],
    answer: "Programming Language",
  },

  { // object i = 3
    question: "NaN stands for _____",
    choice: ["Not a Node", "Norning and Night", "Not a Number", "Not a Noodle"],
    answer: "Not a Number",
  },

  { // object i = 4
    question: "JavaScript first appeared in",
    choice: [1214, 1978, 1995, 1997],
    answer: 1995,
  },

]

// CHECK ANSWER
let i = 0;
btn.addEventListener("click", () => {
  console.log('ANSWER WAS CLICKED')

  console.log(event.target.textContent + " was clicked");
  if (event.target.textContent == quizOptions[i].answer) {
    result.textContent = "Correct!";
    result.style.color = "lawngreen";
    points++;
    console.log("IF TRIGGERED. i = " + i)
  } else {
    result.textContent = "Incorrect";
    result.style.color = "red";
    seconds -= 10; //deduct 10 seconds from the clock
    console.log("ELSE TRIGGERED, i = " + i)

  }

  // INCREASE INDEX, MOVE TO NEXT QUESTION
  i++;

// END SCREEN
  if (i > quizOptions.length-1) {
   showEnd()
   return;
  }
  renderQuestion()

});


  endButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (initials === "") {
      displayMessage("error", "Please enter your initials");
    } else {
      displayMessage("success", "Score saved");

      localStorage.setItem("initials", initials);
    }
  }); 


/* var getScores = JSON.parse(window.localStorage.getItem("scoreCombo")) == 
submitBtn.addEventListener("click", function(event) {
  event.preventDefualt();
  var scoreCombo = {
    initials: userInitials.value,
    secondsLeft: seconds,
  }
  let oldScores = JSON.parse(window.localStorage.getItem("scoreCombo") || []; // get scoreCombo or return empty list
    oldScores.push(scoreCombo);
    window.localStorage.setItem("scoreCombo", JSON.stringify(oldScores))
    console.log(oldScores);
  userInfo.push(scoreCombo)
  console.log(userInfo, "scores" + getScores)
  clearScores.addEventListner("click", function(){
function setHighScores () {
  for (let score = .....) {
    append high score list to <li>
  }
}
  })
}
function setHighScores () {
}*/