let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newgamebtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;
let count = 0;


const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame =()=>{
    count = 0;
    turnO = true;
    unableBoxes();
    msgContainer.classList.add("hidden");
};

boxes.forEach((box) =>{
    box.addEventListener(("click"), ()=> {
        console.log("box was clicked");
        if(turnO === true){
            box.innerText="O";
            box.classList.add("box-green");
            // box.style.backgroundColor = "green";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.classList.add("box-red");
            // box.style.backgroundColor = "red";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWin();

        if (count === 9 && !isWinner) {
        gameDraw();
        }
    });

});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hidden");
    disableBoxes();
  };

const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
};

const unableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText = `Congartulations Winner is ${winner}`;
    // container.classList.add("hidden");
    msgContainer.classList.remove("hidden");
    disableBoxes();
};

const checkWin = () =>{
    for(let pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        // console.log(pos1Val,pos2Val,pos3Val);

        if( pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val==pos2Val&& pos2Val==pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }

};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);