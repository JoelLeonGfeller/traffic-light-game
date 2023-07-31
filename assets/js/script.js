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
        correctScore.innerText = parseInt(correctScore.innerText) + 1
    } else {
        incorrectScore.innerText = parseInt(incorrectScore.innerText) + 1
    }
});

driveBtn.addEventListener("click", function () {
    // This function will be executed when the button is clicked
    const activeCircle = document.querySelector(".circle.active");

    if (activeCircle.id === 'circle3') {
        correctScore.innerText = parseInt(correctScore.innerText) + 1

    } else {
        incorrectScore.innerText = parseInt(incorrectScore.innerText) + 1

    }
});


function randomId() {
    return Math.ceil(Math.random() * 3);
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

// startGame();

startGameBtn.addEventListener("click", () => {
    buttonsArea.style.display = "none";
    gameArea.style.display = "flex";
    startGame();
})