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

// CHECK ANSWER
let i = 0;
btn.addEventListener("click", () => {
  console.log('ANSWER WAS CLICKED')

  console.log(event.target.textContent + " was clicked");
  if (event.target.textContent == quizOptions[i].answer) {
    result.textContent = "Correct!";
    result.style.color = "lawngreen";
    points++;
  } else {
    result.textContent = "Incorrect";
    result.style.color = "red";
    seconds -= 10; //deduct 10 seconds from the clock

  }

  // INCREASE INDEX, MOVE TO NEXT QUESTION
  i++;

// END SCREEN
  if (i > quizOptions.length) {
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