let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset_Game");
let newGamBtn = document.querySelector(".new_Game");
let msgContainer = document.querySelector(".msg-contner");
let msg = document.querySelector("#msg");

// 2 PLAYERS -- playerO,playerX.
//Alternate chance.
let turnO = true; // true h to o krdo.

//Winning Patterns (in 2D ARRAY).
const winngPattns = [
    [0,1,2] , [3,4,5] , [6,7,8], //row wise win
    [0,3,6] , [1,4,7] , [2,5,8], //col wise win
    [0,4,8] , [2,4,6]            //diagonal wise win
];
const reset_Game = () =>
{
    turnO=true;
    enable_Box();
    enable_Box();
    msgContainer.classList.add("hide");
};
// Ab unn Buttons k CLICK pr kuxh hona chahiye-  EVENT LISTENERS KA SOCH .
boxes.forEach(//Arrow-function
   (box) => {
    box.addEventListener("click",() => 
    {
        
        if(turnO)
        {
            box.innerText="O"; // playerO ki turn to "O"
            turnO=false;
        }
        else{
            box.innerText="X"; // playerX ki turn to "X"
            turnO=true;
        }
        box.disabled = true;
        check_Winner();
    });
   }     
);
const disable_Box = () =>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enable_Box = () =>
    {
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
    }
const show_Winner = (Winner) =>
{
    msg.innerText = `Congratulations , winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disable_Box();

}
//KISI BHI BOX KO HUM CLICK KRENGE TOH check_Winner() K PASS CALL JAYEGI
// AUR CHECK WINNER EK EK KRKE SARRE PATTERN KO NIKALEGA.
const check_Winner = () =>
{
    for(let pattern of winngPattns)
   // { console.log(pattern[0],pattern[1],pattern[2], //// INDIVIDIUAL INDICES OR POSITIONS.
   //              boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
   // } 
      { let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !="")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                
                show_Winner(pos1);
            }
        }

}
};
newGamBtn.addEventListener("click",reset_Game);
resetbtn.addEventListener("click",reset_Game);