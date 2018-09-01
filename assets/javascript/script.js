 // console.log('running script')
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    
    var wins = 0;
    var losses = 0;
    var guessesLeft= 10;
	  var letterToGuess;
    var guessesUsed ;

  
   
   function display(){

   document.onkeyup = function(event) {

       
var userGuess = event.key.toLowerCase();    

if(userGuess === letterToGuess ){
 win();
 alert("you win!")
 
}  else if (guessesLeft - 1 === 0) {
    lose(); 
    alert("you lose!")
 } else {
 fail(userGuess);
}
display();
}

    
	  var guessesLeftElement = document.getElementById("guesses-left")
	  var usedGuesses = document.getElementById("used-guesses")
    var winsElement = document.getElementById("wins");
    var lossesElement = document.getElementById("losses");
    lossesElement.innerHTML = losses;
    winsElement.innerHTML =   wins;
    guessesLeftElement.innerHTML= guessesLeft;
    usedGuesses.innerHTML= guessesUsed.join(' , ')
}
    resetGame();
    display();

    function win() {
  wins++;
  resetGame();
}

function lose() {
  losses++;
  resetGame();
}

function fail(letter) {
  guessesLeft--;
  guessesUsed.push(letter);
}

function resetGame() {
  guessesLeft =10;
  guessesUsed = [];
  letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

 }


		


