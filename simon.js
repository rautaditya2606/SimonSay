let h4 = document.querySelector("h4");
let body=document.querySelector("body")
let gameseq = [];
let userseq = [];
let btns = ["purple", "violet", "pink", "green"];
let started = false;
let level = 0;
document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game Started");
        started = true;
        levelUp();
    }
});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 100);
}
function levelUp() {
    userseq = []; 
    level++;
    h4.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    gameseq.push(randColor);
    console.log(gameseq);
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
    score.innerText = `Score ${level-1}`;
}
function check(index) {
    console.log(`Current Level ${level}`);
    if (userseq[index] === gameseq[index]) {
        console.log("Correct choice!");
        if (userseq.length === gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h4.innerText = `Game Over!  \n Press any key to Start`;
        body.classList.add("over")
        setTimeout(function(){
            body.classList.remove("over")
        },100);
        resetGame();
    }
}
function btnpress() {
    let btn = this; 
    userFlash(btn);
    let usercolor = btn.getAttribute("id"); 
    userseq.push(usercolor); 
    check(userseq.length - 1); 
}
let allbtns = document.querySelectorAll(".btn");

for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);
}
function resetGame() {
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];
    h4.innerText = "!!Game Over !! \n  Press any key to start"; 
    score.innerText = `Score ${level}`;
}
let score=document.querySelector(".score")