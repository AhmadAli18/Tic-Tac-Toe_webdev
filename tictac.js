let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();

let turn0 = true;
const winPatter = [
    [0,1,2], [0,3,6], [0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0==true){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
});
const disableBtns = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBtns = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const checkWinner = () => {
    for(let patterns of winPatter){
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val===pos3val){
                console.log("Winner");
                jsConfetti.addConfetti()
                disableBtns();
            }
        }
    }
};
const resetGame = () => {
    turn0 = true;
    enableBtns();
}
reset.addEventListener("click", resetGame)