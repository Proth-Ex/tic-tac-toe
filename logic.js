let boxes = document.querySelectorAll(".btn");
let winner = document.querySelector("#winner");
let reset = document.querySelector("#reset");
let data = [0,0,0,0,0,0,0,0,0];
let pattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,4,2],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

turnX = true;

boxes.forEach(
    (box, index) => {
        box.addEventListener(
            "click",
            () => {
                if(data[index] === 0){
                    if(turnX){
                        box.innerText = "X";
                        data[index] = 1;
                        turnX = false;
                    }
                    else{
                        box.innerText = "O";
                        data[index] = 2;
                        turnX = true;
                    }

                    checkWinner();
                }
            } 
        )
    }
);

reset.addEventListener("click", () => {
    data.forEach(
        (val,index) => data[index] = 0
    );
    boxes.forEach(
        (box) => box.innerText = ""
    );
    boxes.forEach((box) => box.disabled = false);
    winner.innerText = "";
})

const checkWinner = () => {
    for(p of pattern){
        if(data[p[0]] == data[p[1]] && data[p[1]] == data[p[2]] && data[p[0]] != 0){
            if(data[p[0]] == 1)
                winner.innerText = "X WON";
            else
                winner.innerText = "O WON";
            boxes.forEach((box) => box.disabled = true);
        }
    }
}