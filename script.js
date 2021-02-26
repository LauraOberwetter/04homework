var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");

var timer;
var timerCount;

// timer starts counting down when the start button is clicked

document.getElementsByClassName("start-button").onclick =
    function startTimer() {
        timer = setInterval (function() {
            timerCount--;
            timerElement.textContent = timerCount;
            // if (timerCount >= 0) {
            //     if (isWin && timerCount > 0) {
            //         clearInterval(timer);
            //         winGame();
            //     }
            // }
    if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }