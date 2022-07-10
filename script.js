const player1Choice = document.getElementById("player1-choice");
const player2Choice = document.getElementById("player2-choice");
let resultD = document.getElementById("result");
let player2urn;
let player1Turn;
let result;

let btns2 = document.querySelectorAll("li");
btns2.forEach((btn2)=>{
   btn2.addEventListener("click", player1Selection) 
})

function player1Selection(e){
    player1Turn = e.target.id;
    player1Choice.textContent = player1Turn;
    player1Choice.style="visibility: hidden"

    let notice=document.getElementById("notice")
    notice.innerText="player 1 have selected"
    notice.style="color:red"

}



let btns = document.querySelectorAll("button");
btns.forEach((btn)=>{
   btn.addEventListener("click", player2Selection)
})

function player2Selection(e){
    player2Turn = e.target.id;
    player2Choice.textContent = player2Turn;
    player2Choice.style="visibility: hidden"


    let notice2=document.getElementById("notice2")
    notice2.innerText="player 2 have selected"
    notice2.style="color:red"
 

   displayResult();
   window.setInterval('refresh()', 1000);  


}


function refresh() {
    window .location.reload();
    alert( "results: " + result +" "+ "      reload for new play ")
}


function displayResult() {

if(player2Turn === player1Turn){
    result = "Draw"
}
if(player1Turn ==="rock" && player2Turn === "paper") {
    result = "player 2 wins"
}
if(player1Turn === "rock" && player2Turn ==="scissor") {
    result = "player 1 wins"
}
if(player1Turn ==="paper" && player2Turn === "scissor"){
    result = "player 2 wins"
}
if(player1Turn === "paper" && player2Turn === "rock") {
    result = "player 1 wins"
}
if(player1Turn==="scissor" && player2Turn === "rock") {
    result = "player 2 wins"
}
if(player1Turn === "scissor" && player2Turn === "paper"){
    result = "player 1 wins"
}
resultD.style="color:green"
resultD.innerText = result;

}