let userScore = 0;
let compScore = 0;

const choics = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const generateCompchoice = () =>{
    let options = ["rock" , "paper" , "scissor"];
    let Randomindex = Math.floor(Math.random()*3);
    return options[Randomindex];
};

const drawGame = () => {
    console.log("Game is Draw")
    msg.innerText = "Game is DRAW.Play Again";
    msg.style.color = "black";
    msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin)
    {   userScore++;
        userScorepara.innerText = userScore;
        console.log("You Win");
      msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
      msg.style.color = "black";
      msg.style.backgroundColor = "green";
    }

    else{compScore++;
        compScorepara.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
 };

const playGame = (userChoice) =>
{
    console.log("userChoice is = ",userChoice);
    //Comp choice.
    let compChoice = generateCompchoice();
    console.log("compChoice is = ",compChoice);

    if(userChoice === compChoice)
    { //drawGame
        drawGame();
    }
    else{
        userWin = true;
        if(userChoice === "rock")
        {userWin = compChoice === "paper" ? false :true;
        }

        else if(userChoice === "paper")
        {userWin = compChoice === "scissor" ? false :true;}
        
        else{userWin = compChoice === "rock" ? false :true;}
    
    showWinner(userWin,userChoice,compChoice);
       }
};
choics.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        });
}

);