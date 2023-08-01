// Get a reference to the button element by its ID
const waitBtn = document.getElementById("btn1");
const driveBtn = document.getElementById("btn2");
let gameInterval;
let currentId = randomId();

const correctScore = document.getElementById("correct-int");
const incorrectScore = document.getElementById("incorrect-int");

const gameArea = document.querySelector(".game-area");
const buttonsArea = document.querySelector(".main-buttons");

const startGameBtn = document.getElementById("start-game");
const rulesBtn = document.getElementById("read-rules");

// Add the event listener to the button 
waitBtn.addEventListener("click", function () {
    // This function will be executed when the button is clicked
    const activeCircle = document.querySelector(".circle.active");

    if (activeCircle.id === 'circle1' || activeCircle.id === 'circle2') {
        correctScore.innerText = parseInt(correctScore.innerText) + 1;
    } else {
        incorrectScore.innerText = parseInt(incorrectScore.innerText) + 1;
    }
});

driveBtn.addEventListener("click", function () {
    // This function will be executed when the button is clicked
    const activeCircle = document.querySelector(".circle.active");

    if (activeCircle.id === 'circle3') {
        correctScore.innerText = parseInt(correctScore.innerText) + 1;
    } else {
        incorrectScore.innerText = parseInt(incorrectScore.innerText) + 1;
    }
});

function toggleCircle(circleId) {
    const circle = document.getElementById(circleId);
    if (circle.classList.contains('active')) {
        circle.classList.remove('active');
        circle.classList.add('inactive');
    } else {
        circle.classList.remove('inactive');
        circle.classList.add('active');
    }
}

function randomId() {
    return Math.ceil(Math.random() * 3);
}

function resetGame() {
    clearInterval(gameInterval);
    remainingTime = 30;
    timerCount.innerText = remainingTime;
    correctScore.innerText = "0";
    incorrectScore.innerText = "0";
    currentId = randomId();
    const activeCircle = document.querySelector(".circle.active");
    if (activeCircle) {
        toggleCircle(activeCircle.id);
    }
}

function startGame() {
    let activeCircle = document.querySelector(".circle.active");
    if (!activeCircle) {
        toggleCircle(`circle${currentId}`);
    }
    gameInterval = setInterval(() => {
        toggleCircle(`circle${currentId}`);
        let newId = randomId();
        toggleCircle(`circle${newId}`);
        currentId = newId;
    }, 1000);
}

startGameBtn.addEventListener("click", () => {
    buttonsArea.style.display = "none";
    gameArea.style.display = "flex";
    startGame();
    startCountdown();
});

const quitGameBtn = document.getElementById("btn3");
quitGameBtn.addEventListener("click", () => {
    resetGame();
    window.location.reload();
});

document.addEventListener('DOMContentLoaded', () => {
    const readRulesBtn = document.getElementById('read-rules');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const popupContainer = document.getElementById('popupContainer');

    readRulesBtn.addEventListener('click', () => {
        popupContainer.style.display = 'block';
    });

    closePopupBtn.addEventListener('click', () => {
        popupContainer.style.display = 'none';
    });
});

const timerCount = document.getElementById("timer-count");
let remainingTime = 30;

function startCountdown() {
    const countdownInterval = setInterval(() => {
        remainingTime -= 1;
        timerCount.innerText = remainingTime;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            showFinalScore();
        }
    }, 1000);
}

function showFinalScore() {
    clearInterval(gameInterval);
    gameArea.style.display = "none";
    buttonsArea.style.display = "flex";
    alert(`Game Over!\nYour Final Score: Correct - ${correctScore.innerText}, Incorrect - ${incorrectScore.innerText}`);
    resetGame();
}