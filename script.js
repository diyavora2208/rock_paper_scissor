let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#computer-score");

const gencomputerChoice = () => {
    const options = ["rock" , "paper", "scissor"];
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userscore += 1;
        user_score.innerText = userscore;
    }
    else{
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        computerscore += 1;
        comp_score.innerText = computerscore;
    }
}

const gamedraw = ()=>{
    msg.innerText = "Game Draw!!";
    msg.style.backgroundColor = "rgb(1, 1, 29)";
}

const playgame = (userChoice)=> {
    console.log("user choice = ",userChoice);
    //Generating computer choice
    const compChoice = gencomputerChoice();
    console.log("computer choice = ",compChoice);

    //original logic
    if(userChoice == compChoice){
        gamedraw();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})