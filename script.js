'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
  const reset = document.querySelector('.btn.again'),
        secretNumber = document.querySelector('.number'),
        highScore = document.querySelector('.highscore'),
        message = document.querySelector('.message'),
        inputGuess = document.querySelector('input.guess'),
        btnCheck = document.querySelector('.btn.check');
  let score = document.querySelector('span.score'),
      numberScore = 20;
  const numberSecretScore = Math.trunc((Math.random()*20)+1);

      secretNumber.textContent = numberSecretScore;
 

  const scoreMinus= ()=> {
    
    if(numberScore > 0){
     numberScore --;
      score.textContent = numberScore;

    } else {
      message.textContent = 'You are Lose';
    }
    inputGuess.value='';

  }

  const checkValue = () => {
    btnCheck.addEventListener('click', ()=>{

      const inputValue = numberSecretScore;
      if(inputValue == inputGuess.value){
        document.querySelector('body').style.backgroundColor = 'green';
        message.textContent = 'You are WON';
        btnCheck.disabled = true;
      }else{
        message.textContent = 'Start guessing...';

      }
      scoreMinus();
      


    });
  }

  const resetGame = ()=>{
    reset.addEventListener('click',()=>{
      numberScore = 20;
      score.textContent = numberScore;
      secretNumber.textContent =  Math.trunc((Math.random()*20)+1);
      message.textContent = 'Start guessing...';
      document.querySelector('body').style.backgroundColor = '#222';
      btnCheck.disabled = false;

    });
  };

  checkValue();
  resetGame();
  



});