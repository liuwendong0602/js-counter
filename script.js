let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let countDisplay = document.getElementById("countDisplay");

let count = 0;

function updateDisplay() {
    countDisplay.innerText = count;
    if(count > 0){
        countDisplay.style.color = "green";
    }else if(count === 0){
        countDisplay.style.color = "black";
    }else{
        countDisplay.style.color = "red";
    }
}

increaseBtn.onclick = function(){
    count = count + 1;
    updateDisplay();
};

decreaseBtn.onclick = function(){
    count = count -1;
    updateDisplay();
}

resetBtn.onclick = function(){
    count = 0;
    updateDisplay();
}

updateDisplay();