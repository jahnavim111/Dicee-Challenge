const pics=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

const dice1=document.querySelector(".img1");
const dice2=document.querySelector(".img2");
const heading=document.querySelector("h1");

function RollTheDie(){
    var a=Math.floor(Math.random()*pics.length);
    var b=Math.floor(Math.random()*pics.length);
    if(a==b){
        heading.textContent="Draw"
    }
    else if(a>b){
        heading.textContent="🚩Player 1 Wins";
    }
    else{
        heading.textContent="Player 2 Wins🚩";
    }
    var image1=pics[a];
    var image2=pics[b];
    dice1.setAttribute("src",image1);
    dice2.setAttribute("src",image2);
    
}
 