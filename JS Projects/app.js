let boxes = document.querySelectorAll(".box");
let resetbutton =document.querySelector("#Reset");
let newGameBtn = document.querySelector("#NewButton");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click",()=> {
        console.log("box was Clicked");
        if (turn0){         //player 1
            box.innerText="O";
            box.style.color = "blue";
            turn0=false;
        }
        else{               //player 2
            box.innerText="X";
            box.style.color = "red";
            turn0=true;
        }
        box.disabled =true;
        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns){
        
            let posval1 = boxes[pattern[0]].innerText;
            let posval2 = boxes[pattern[1]].innerText;
            let posval3 = boxes[pattern[2]].innerText;
            if(posval1 !="" && posval2 !="" && posval3 !=""){
                if(posval1===posval2&& posval2===posval3){
                    console.log("Winner", posval1);
                    showWinner(posval1);

                }
            }
    }
};
const showWinner= (Winner)=>{
    msg.innerText=`Congratualations, Winner is ${Winner}`;
    disabledBox();
    msgContainer.classList.remove("hide");

}
const disabledBox=() =>{
    for (box of boxes){
        box.disabled=true;
    }
}
const enabledBox=() =>{
    for (box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}

const newGame = () => {
    turn0=true;
    enabledBox();
    msgContainer.classList.add("hide");
}
newGameBtn.addEventListener("click",newGame);
resetbutton.addEventListener("click",newGame);