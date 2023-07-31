const gameArea = document.querySelector(".game-area");
const buttonsArea = document.querySelector(".main-buttons");

const startGameBtn = document.getElementById("start-game");
const rulesBtn = document.getElementById("read-rules");

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