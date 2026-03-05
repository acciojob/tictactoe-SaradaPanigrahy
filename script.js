//your JS code here. If required.
let player1 = "";
let player2 = "";
let currentPlayer = "x";
let currentName = "";
let board = ["","","","","","","","",""];

const message = document.querySelector(".message");

document.getElementById("submit").onclick = function(){

player1 = document.getElementById("player1").value;
player2 = document.getElementById("player2").value;

currentName = player1;

document.getElementById("board").style.display = "block";

message.innerText = player1 + ", you're up";

};

for(let i=1;i<=9;i++){

document.getElementById(i).addEventListener("click",function(){

if(this.innerText !== "") return;

this.innerText = currentPlayer;

board[i-1] = currentPlayer;

if(checkWinner()){
message.innerText = currentName + " congratulations you won!";
return;
}

if(currentPlayer === "x"){
currentPlayer = "o";
currentName = player2;
}else{
currentPlayer = "x";
currentName = player1;
}

message.innerText = currentName + ", you're up";

});

}

function checkWinner(){

const winPatterns = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

for(let pattern of winPatterns){

let a = pattern[0];
let b = pattern[1];
let c = pattern[2];

if(board[a] && board[a] === board[b] && board[a] === board[c]){
return true;
}

}

return false;

}