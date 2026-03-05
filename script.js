//your JS code here. If required.
let player1="";
let player2="";
let currentPlayer="X";
let boardState=["","","","","","","","",""];

let message=document.querySelector(".message");

let winPatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

document.getElementById("submit").onclick=function(){

player1=document.getElementById("player-1").value;
player2=document.getElementById("player-2").value;

document.getElementById("board").style.display="grid";
document.getElementById("title").style.display="block";

message.textContent=player1 + ", you're up";

};

let cells=document.querySelectorAll(".cell");

cells.forEach((cell,index)=>{

cell.addEventListener("click",function(){

if(boardState[index]!=="") return;

if(currentPlayer==="X"){
cell.textContent="X";
boardState[index]="X";
}
else{
cell.textContent="O";
boardState[index]="O";
}

checkWinner();

currentPlayer=currentPlayer==="X"?"O":"X";

if(currentPlayer==="X"){
message.textContent=player1 + ", you're up";
}else{
message.textContent=player2 + ", you're up";
}

});

});

function checkWinner(){

for(let pattern of winPatterns){

let a=pattern[0];
let b=pattern[1];
let c=pattern[2];

if(
boardState[a] &&
boardState[a]===boardState[b] &&
boardState[a]===boardState[c]
){

let winner=boardState[a]==="X"?player1:player2;

message.textContent=winner+" congratulations you won!";

cells.forEach(cell=>cell.style.pointerEvents="none");

}

}

}