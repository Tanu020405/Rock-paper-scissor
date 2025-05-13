let userscore=0;
let compscore=0;
let round = 0;
let gameActive = false;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

msg.addEventListener("click", () => {
    userscore = 0;
    compscore = 0;
    round = 0;
    gameActive = true;
    userscorePara.innerText = "0";
    compscorePara.innerText = "0";
    msg.innerText = "Click one of your choices!";
    msg.style.backgroundColor = "black";
});


const getCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame=()=>{
    msg.innerText="its a draw";
    msg.style.backgroundColor="grey";
};

const showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText="you won!";
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorePara.innerText=compscore;
        msg.innerText="you lost!";
        msg.style.backgroundColor="red";
    }

    
    
};

const playgame=(userChoice)=>{
    if(!gameActive){
        msg.innerText = "Click 'Play Your Game' to start.";
        msg.style.backgroundColor = "orange";
        return;
    }
     if (round >= 5) {
        msg.innerText = "Game Over. Click 'Play Your Game' to restart.";
        gameActive = false;
        return;
    }

    const compChoice = getCompChoice();

    if (userChoice === compChoice) {
        drawgame();
    } else {
        let userWin =
            (userChoice === "rock" && compChoice === "scissor") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissor" && compChoice === "paper");
        showwinner(userWin);
    }

    round++;

    if (round === 5) {
        setTimeout(() => {
            if (userscore > compscore) {
                msg.innerText="🎉 You won the game!";
            } else if (userscore < compscore) {
                msg.innerText="😢 You lost the game.";
            } else {
                msg.innerText="😐 It's a draw.";
            }
            alert("Game Over. Click 'Play Your Game' to restart.");
            gameActive = false;
        }, 100);
    }
};

choices.forEach(choice=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.id;
        playgame(userChoice);
    });
});

