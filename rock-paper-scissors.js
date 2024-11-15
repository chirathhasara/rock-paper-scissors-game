let score=JSON.parse(localStorage.getItem('score'))
  ||{
    wins:0,
    looses:0,
    ties:0
  };

  updatescore();
  function pickComputerMove(){

    let number = Math.random();

    if(number>=0 && number<1/3){
     computerMove = 'Rock';
    }
    else if(number>=1/3 && number<2/3){
      computerMove = 'Paper';
    }
    else if(number>=2/3 && number<1){
      computerMove = 'Scissors';
    }

    return computerMove;
  }

  function playgame(playerMove){

    let computerMove =pickComputerMove();
    let result='';

    if(playerMove==='Rock'){
      if (computerMove === 'Rock'){
        result = 'tie';
      }
      else if (computerMove === 'Paper'){
        result = 'Loss';
      }
      else if (computerMove === 'Scissors'){
        result = 'Won';
      }

    }
    else if(playerMove === 'paper'){

      if (computerMove === 'Rock'){
        result = 'Won';
      }

      else if (computerMove === 'Paper'){
        result = 'tie';
      }

      else if (computerMove === 'Scissors'){
        result = 'Loss';
      }
    }
    else if(playerMove === 'Scissors'){

      if (computerMove === 'Rock'){
        result = 'Loss';
      }

      else if (computerMove === 'Paper'){
        result = 'Won';
      }

      else if (computerMove === 'Scissors'){
        result = 'tie';
      }
    }

    if (result === 'Won'){
        score.wins+=1;
      }
      else if (result === 'Loss'){
        score.looses+=1;
      }
      else if (result === 'tie'){
        score.ties+=1;
      }

    localStorage.setItem('score',JSON.stringify(score));

    updatescore();
    document.querySelector('.js-result').innerHTML=`you ${result}`;
    document.querySelector('.js-move').innerHTML=`You Pick <img src="images/${playerMove}-emoji.png" class="move-icon"> 
    Computer Pick <img src="images/${computerMove}-emoji.png" class="move-icon">`;
     
  }

  function updatescore(){
    document.querySelector('.js-score').innerHTML=`wons: ${score.wins} looses: ${score.looses} ties: ${score.ties}`;
  }
