let user = {
    wins: 0,
    ties: 0,
    loses: 0
  };
  
  if (localStorage.getItem('scores')) {
    user = JSON.parse(localStorage.getItem('scores'));
  }
  
  let wins = document.getElementById('winsText');
  let ties = document.getElementById('tiesText');
  let loses = document.getElementById('losesText');
  
  wins.textContent = "Wins: " + user.wins;
  ties.textContent = "Ties: " + user.ties;
  loses.textContent = "Loses: " + user.loses;

  let rock = document.getElementById('rock');
  let paper = document.getElementById('paper');
  let scissors = document.getElementById('scissors');
  
  let tester = document.getElementById('test');
  let enemy = document.getElementById('enemy');
  
  let pMove;
  let eMove;
  

  function resetScore() {
    user = {
      wins: 0,
      ties: 0,
      loses: 0
    };

    localStorage.setItem('scores', JSON.stringify(user));
    
    wins.textContent = "Wins: " + user.wins;
    ties.textContent = "Ties: " + user.ties;
    loses.textContent = "Loses: " + user.loses;

  }

  function paperMove() {
    pMove = 2;
    tester.textContent = "wer9a";
    rock.style.opacity = "0.4";
    scissors.style.opacity = "0.4";
  }
  
  function rockMove() {
    pMove = 1;
    tester.textContent = "7jra";
    paper.style.opacity = "0.4";
    scissors.style.opacity = "0.4";
  }
  
  function scissorsMove() {
    pMove = 0;
    tester.textContent = "m9es";
    paper.style.opacity = "0.4";
    rock.style.opacity = "0.4";
  }
  
  function changeEGHOST() {
    eMove = Math.floor(Math.random() * 3);
  
    if (eMove === 2) {
      enemy.src = "assets/paper.png";
    } else if (eMove === 1) {
      enemy.src = "assets/rock.png";
    } else if (eMove === 0) {
      enemy.src = "assets/scissors.png";
    }
    enemy.style.transform = "rotate(180deg)";
  }
  
  function compareWinner() {
    if (pMove > eMove) {
      user.wins += 1;
      wins.textContent = "Wins: " + user.wins;
    } else if (pMove === eMove) {
      user.ties += 1;
      ties.textContent = "Ties: " + user.ties;
    } else if (pMove < eMove) {
      user.loses += 1;
      loses.textContent = "Loses: " + user.loses;
    }
    localStorage.setItem('scores', JSON.stringify(user));
  }
  
  function resetGHOST() {
    setTimeout(() => {
      enemy.src = "assets/ghost.png";
      enemy.style.transform = "rotate(0deg)";
      paper.style.opacity = '1';
      rock.style.opacity = '1';
      scissors.style.opacity = '1';
    }, 1500);
  }
  