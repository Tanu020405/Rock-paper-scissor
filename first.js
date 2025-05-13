let userscore=0;
let compscore=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

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
    const compchoice=getCompChoice();

    if(userChoice===compchoice){
        drawgame();
    }else{
        let userwin=(userChoice==="rock" && compchoice==="scissor")||
        (userChoice==="paper" && compchoice==="rock")||
        (userChoice==="scissor" && compchoice==="paper");
        showwinner(userwin);
    }
};

choices.forEach(choice=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.id;
        playgame(userChoice);
    });
});

choice.addEventListener("click", () => {
    const userChoice = choice.id;
    console.log("User clicked:", userChoice); // ✅ Debug print
    playgame(userChoice);
});
