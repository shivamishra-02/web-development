let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let highestScore = -1;

h2 = document.querySelector("h2");

let h3 = document.querySelector("h3");

// function to start the game 
document.addEventListener("keypress" , function() {
    if(started == false){
        console.log("Game started!!");
        started = true;

        levelup();
    }
});

// function to flash the button which is done by the game itslef
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

// function to flash the button which is done by thr user itslef
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

// function when the level is being up and it contain what the changes will be applied after the level up
function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIndex];
    gameSeq.push(randomColor);
    console.log(gameSeq);
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameFlash(randomBtn);
}

// function when the button is pressed what will happen 
function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

// function which matches the value enterd by the game and the user wheather it is same or not
function checkAns(index){
    if(userSeq[index]==gameSeq[index]){
        console.log("button matched")
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML = `Game over!! Your Score was <b>${level}</b> <br> Press any key to restart the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setInterval(function(){
            document.querySelector("body").style.backgroundColor = "white";
        } , 150);
        updateHighScore();
        h3.innerText = `Your Highest Score is:-${highestScore}`;
        reset();
    }
}

function reset(){
    userSeq=[];
    gameSeq=[];
    started = false;
    level = 0;
}

function updateHighScore(){
    if (level>highestScore){
        highestScore = level;
    }
}