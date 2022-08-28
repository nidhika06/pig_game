'use strict'
const block1=document.querySelector('.block-0')
const block2=document.querySelector('.block-1')
const dice=document.querySelector('.dice-5');
dice.classList.add('hidden');
const current1=document.querySelector('#current--0');
const current2=document.querySelector('#current--1');
const nRoll=document.querySelector('.rolldies');
const nHold=document.querySelector('.hold');
const nPlay=document.querySelector('.play');
const nscore0=document.querySelector('.tscore--0');
const nscore1=document.querySelector('.tscore--1');

nscore0.textContent=0;
nscore1.textContent=0;


// hold score of both player 1 and 2
let score=[0,0]
let currentScore=0;
let activeplayer=0;
let diceno=0;
let playing =true;



// switch to player
const switchtoplayer=function(){
document.querySelector(`#current--${activeplayer}`).textContent=0;
currentScore=0;
activeplayer=activeplayer===0?1:0;
block1.classList.toggle('player--active');
block2.classList.toggle('player--active');
currentScore+=diceno;
document.querySelector(`#current--${activeplayer}`).textContent=currentScore;  
}

// rolling dice functionality
nRoll.addEventListener('click',function(){
    if(playing){
    //generating a rendom diceroll
     let diceno=Math.trunc(Math.random()*6)+1;
    //display dice
    dice.classList.remove('hidden');
    dice.src=`dice-${diceno}.png`;

    //check for rolled 1:
    if(diceno!=1){
        // add dice to the current score
        currentScore+=diceno;
        document.querySelector(`#current--${activeplayer}`).textContent=currentScore;
    } 
    //if true switch to next player
    else{
      
    switchtoplayer();
    }
} 
})


nHold.addEventListener('click',function(){
    if(playing){
    // add score to active player score
       score[activeplayer]+=currentScore;
       document.querySelector(`.tscore--${activeplayer}`).textContent=score[activeplayer];
    // check if the score >=then 100 player winnes
       if(score[activeplayer]>=100){
        // finish game
        document.querySelector(`.block-${activeplayer}`).classList.add('player--winner');
       }
    // finish the game

    // if not switch to the next player
   
  
    // check if player score is>=100
    if(score[activeplayer]>=10){
        // finish the game 
        playing=false; 
        dice.classList.add('hidden');
        document.querySelector(`.block-${activeplayer}`).classList.add('player--winnes');
        document.querySelector(`.block-${activeplayer}`).classList.remove('player--active');
    }
    else{
        //switch tne player
        switchtoplayer(); 
    }
}  
})

nPlay.addEventListener('click',function(){

    nscore0.textContent=0;
    nscore1.textContent=0;
    // hold score of both player 1 and 2
     score=[0,0]
     currentScore=0;
     activeplayer=0;
     diceno=0;
     playing =true;
    nscore0.textContent=0;
    nscore1.textContent=0;
    current1.textContent=0;
    current2.textContent=0;
    block1.classList.remove('player--winnes');
    block2.classList.remove('player--winnes');
    block1.classList.add('player--active');
    block2.classList.remove('player--active');
})