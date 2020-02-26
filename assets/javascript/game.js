
// // Wins: (# of times user guessed the word correctly).
// // If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
// // As the user guesses the correct letters, reveal them: m a d o _  _ a.
// // Number of Guesses Remaining: (# of guesses remaining for the user).
// // Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
// // After the user wins/loses the game should automatically choose another word and make the user play it.


// //evaluate if game is in progress or not
// var playing = false;
// var startButton;


// document.getElementById("start").addEventListener("keydown", myFunction);
// function myFunction() {
// }

// function myFunction(){
//   console.clear();
// }

// $document.ready(function(){
//     $("start").click(function(){
//     document.getElementById("#game-placeholder").value="";
//     });
//     });

// //guesses + categories. Array of objects, 1 would have hint and 1 would have answer
// var words = [
//     // mission
//     "waste the wife",
//     // mission
//     "ambulance", 
//     //mission
//     "rampage",
//     // character
//     "tommy vercetti",
//     // character
//     "candy suxxx",
//     // character
//     "love fist"
//     //song
//     "i ran so far away",
//     //song
//     "sunglasses at night",
//     //vehicle
//     "infernus",
//     //vehicle
//     "helicopter",
//     //weapon
//     "flamethrower",
//     //weapon
//     "rocket launcher",
//     //weapon
//     "katana",
//     ];


// //number of times user guessed word correctly (reveal letters as player guesses)
// var tracker = 0;
// var wins = 0;
// var currentWord = array1[tracker]
// function displayquestion(){
//   document.getElementById("word").textContent=currentWord
// }
// //pick random word
// var word = words[Math.floor(Math.random() * words.length)];

// displayquestion()
// document.addEventListener("keypress", fuction(event){
//   console.log(event)
//   var keypress = event.key
// })

// //before call display question, increment tracker
    
    
//     // Set up the amswer answerArrayvar answerArray = [];
//     for (var i = 0; i < word.length; i++) {
//       answerArray[i] = "_";
//     }
    
//     var remainingLetters = word.length;
    
//     // The game loop
    
//     while (remainingLetters > 0) {
//     // Show the player their progress alert(answerArray.join(" "));
    
//     // Get a guess from the player
    
//     var guess = prompt("Guess a letter.");
//     if (guess === ) {
//     } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//     } else {
//     // Update the game state with the guess
    
//     for (var j = 0; j < word.length; j++) {
//       if (word[j] === guess) {
//         answerArray[j] = guess; remainingLetters--;
//       }
//     }
//     }
//     // The end of the game loop
//     }
//     // Show the answer and congratulate the player
    
//     alert(answerArray.join(" "));
//     alert("Good job! The answer was " + word);
    
//     // Write your functions here
    
//     var word = pickWord();
//     var answerArray = setupAnswerArray(word);
//     var remainingLetters = word.length;
//     var pickWord = function () {
//     // Return a random word
//     };
    
//     var setupAnswerArray = function (word) {
//     // Return the answer array
//     };
//     var showPlayerProgress = functin (answerArray)
//     {
//     //Use alert to show the player their progress
//     };
    
//     var getGuess = function () {
//     // Use prompt to get a guess
//     };
    
//     var updateGameState = function (guess, word, answerArray) {
//     // Update answerArray and return a number showing how many times the guess appears in the word so remainingLetters can be updated
//     };
    
//     var showAnswerAndCongratulatePlayer = function (answerArray) {
//     // Use alert to show the answer and congratulate the player
//     };
//     while (remainingLetters > 0) {
//     showPlayerProgress(answerArray);
//     var guess = getGuess();
//     if (guess === null) {
//     break;
//     } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//     } else {
//     var correctGuesses = updateGameState(guess, word, answerArray);
//     remainingLetters -= correctGuesses;
//     }
//     }
    
//     showAnswerAndCongratulatePlayer(answerArray);
