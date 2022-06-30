'use strict';


document.addEventListener('DOMContentLoaded', ()=>{
  const reset = document.querySelector('.btn.again'),
        secretNumber = document.querySelector('.number'),
        highScore = document.querySelector('.highscore'),
        message = document.querySelector('.message'),
        inputGuess = document.querySelector('input.guess'),
        btnCheck = document.querySelector('.btn.check');
  let score = document.querySelector('span.score'),
      numberScore = 20,
      checkNumber = 0,
      numberSuper = Math.trunc((Math.random()*20)+1);
      score.textContent = numberScore;

    

 

  const scoreMinus= ()=> {
    
    if(numberScore > 0){
     numberScore --;
      score.textContent = numberScore;

    } else {
      message.textContent = 'You are Lose';
    }
    inputGuess.value='';
    checkNumber = 0;
  }

  const setMessage = (textMessage)=>{
    message.textContent = textMessage;
  }

  const checkValue = () => {
    btnCheck.addEventListener('click', ()=>{
      checkNumber = inputGuess.value;
      if(checkNumber == numberSuper){
        document.querySelector('body').style.backgroundColor = 'green';
        setMessage('You are WON');
        btnCheck.disabled = true;
        if(numberScore > highScore.textContent){
          highScore.textContent = numberScore-1;
        }
          scoreMinus();
          secretNumber.textContent = numberSuper;
          numberScore = 20;
          
      }else if (!inputGuess.value || inputGuess.value <= 0 || inputGuess.value > 20){
      setMessage('Not valid Number. Try again !');
      inputGuess.value='';
       return;
      } else if( inputGuess.value > numberSuper){
        setMessage('It\'s too high!');
        scoreMinus();
      } else if( inputGuess.value < numberSuper){
        setMessage('It\'s too low!');
        scoreMinus();
      } 

    });
  }

  const resetGame = ()=>{
    reset.addEventListener('click',()=>{
      message.textContent = 'Start guessing...';
      document.querySelector('body').style.backgroundColor = '#222';
      btnCheck.disabled = false;
      inputGuess.value='';
      secretNumber.textContent = '?';
      score.textContent = numberScore;

      return  numberSuper = Math.trunc((Math.random()*20)+1);


    });
  };


  checkValue();
  resetGame();

});