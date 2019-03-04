//business logic
//remember that youre using query selectors so refer to notes on what they pick ,they pick the first element of the file selected
var scores, lapScore, activeRoller,startRounds;
var btnRoll = document.querySelector('.btn-roll');
var btnFold = document.querySelector('.btn-fold');



document.querySelector('.btn-roll').addEventListener('click', function(){
	if (startRounds) {
		var die = Math.floor(Math.random() * 6) + 1;

		var DICEUP = document.querySelector('.swag');
		DICEUP.style.display = 'block';


		if (die !== 1) {
			hideRolledMsg();

			lapScore += die;
			document.querySelector('#current-' + activeRoller).textContent = lapScore;
		} else {

			disableBtn(btnRoll, 1000);
			hideRolledMsg();
			document.querySelector('.player-'+activeRoller+'-rolled-1').style.visibility = 'visible';
			nextPlayer();
		}
	}

});

document.querySelector('.btn-fold').addEventListener('click', function(){
		if (startRounds) {
			disableBtn(btnRoll, 1000);
			scores[activeRoller] += lapScore;

			//ui logic
			document.querySelector('#score-' + activeRoller).textContent = scores[activeRoller];
			if (scores[activeRoller] >= 100) {
				document.querySelector('#name-' + activeRoller).textContent = 'Winner!';
				document.querySelector('.swag').style.display = 'none';
				document.querySelector('.player-' + activeRoller + '-panel').classList.add('winner-' + activeRoller);
				document.querySelector('.player-' + activeRoller + '-panel').classList.remove('active-' + activeRoller);
				startRounds = false;

			} else {
				nextPlayer();
			}
		}

});

document.querySelector('.btn-refresh').addEventListener('click', init);

document.querySelector('.btn-rules').addEventListener('click', function(){
	    var games = document.getElementsByClassName('gameGround');
		for(i=0;i<games.length;i++){
			games[i].style.display = 'none';
		}

	    document.querySelector('.btn-back').style.display = 'block';
		var rules = document.getElementsByClassName('rules-panel');
		for(i=0;i<rules.length;i++){
			rules[i].style.display = 'block';
		}

});

document.querySelector('.btn-back').addEventListener('click', function(){
	    var games = document.getElementsByClassName('gameGround');
		for(i=0;i<games.length;i++){
			games[i].style.display = 'block';
		}

	    document.querySelector('.btn-back').style.display = 'none';
		var rules = document.getElementsByClassName('rules-panel');
		for(i=0;i<rules.length;i++){
			rules[i].style.display = 'none';
		}

});

function init() {
	scores = [0,0];
	lapScore = 0;
	activeRoller = 0;
	startRounds = true;

	document.querySelector('#name-0').textContent = 'Roller 1';
	document.querySelector('#name-1').textContent = 'Roller 2';
	document.querySelector('.player-0-panel').classList.add('active-0');
	document.querySelector('.player-0-panel').classList.remove('winner-0');
  document.querySelector('.player-1-panel').classList.remove('winner-1');
	document.querySelector('.swag').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-rolled-1').style.visibility = 'hidden';
	document.querySelector('.player-1-rolled-1').style.visibility = 'hidden';

}

function nextPlayer() {

		var tagups = document.getElementsByTagName('i');
		for(i=0;i<tagups.length;i++){
			tagups[i].classList.remove('color-' + activeRoller);
		}

		document.querySelector('.swag').style.display = 'none';
		document.querySelector('.player-' + activeRoller + '-panel').classList.remove('active-' + activeRoller);
		activeRoller ===0 ? activeRoller = 1 : activeRoller = 0;
		lapScore = 0;

		for(i=0;i<tagups.length;i++){
			tagups[i].classList.add('color-' + activeRoller);
		}
		document.querySelector('.player-' + activeRoller + '-panel').classList.add('active-' + activeRoller);
		document.querySelector('#current-0').textContent = '0';
		document.querySelector('#current-1').textContent = '0';
}

function disableBtn(btn, time) {
		btn.disabled = true;
      	setTimeout(function(){btn.disabled = false;},time);
}

function hideRolledMsg(){
	document.querySelector('.player-0-rolled-1').style.visibility = 'hidden';
	document.querySelector('.player-1-rolled-1').style.visibility = 'hidden';
}
