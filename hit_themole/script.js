const startBtn = document.getElementById("start");
const scoreText = document.getElementById("score");
const moles = document.querySelectorAll(".mole");


let previousMole;
let finished = false;
let score = 0;

function randomMole() {
    const order = Math.floor(Math.random() * moles.length);
    const selectedMole = moles[order];
    if (previousMole === selectedMole) {
        return randomMole();
    } else {
        previousMole = selectedMole;
    }
    return selectedMole;
}

function randomTime(min,max) {
    const time = Math.round(Math.random() * (max - min)) + min;
    return time;
}

function up() {
    const mole = randomMole();
    const time = randomTime(1000,1500);    
    mole.classList.add("selected");
    setTimeout(() => {
        mole.classList.remove("selected");
        if (!finished) {
            up();
        }
    }, time);
}

function startGame() {
    up();
    setTimeout(() => {
        finished = true;
    }, 15000 );
}



function hit(e){
    if(e.target.classList.contains("selected")) {
        score++;
        e.target.classList.remove("selected");
    }
    scoreText.textContent = score;
}

startBtn.addEventListener("click",startGame);

moles.forEach((mole) => {
    mole.addEventListener("click",hit);
});