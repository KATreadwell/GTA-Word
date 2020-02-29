
// // Wins: (# of times user guessed the word correctly).
// // If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
// // As the user guesses the correct letters, reveal them: m a d o _  _ a.
// // Number of Guesses Remaining: (# of guesses remaining for the user).
// // Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
// // After the user wins/loses the game should automatically choose another word and make the user play it.

// use to clear screen with Start button Option 1
// $('#start').on('click', function() {
//     $('#game').hide();
//     $('#start').hide();
// });

//declare variables
var wins = 0;
var losses = 0;
var remainingGuesses = 0;
var mistakesMade = 0;
var lettersGuessed = [];
var answerArray = [];
var currentWord = [];
var ABC = ("abcdefghijklmnopqrstuvwxyz").split("");

//nested array
var wordBank = [
    ["mission", "waste the wife"],
    ["mission", "ambulance"],
    ["mission", "rampage"],
    ["character", "tommy vercetti"],
    ["character", "candy suxxx"],
    ["character", "love fist"],
    ["song", "i ran so far away"],
    ["song", "sunglasses at night"],
    ["vehicle", "infernus"],
    ["vehicle", "helicopter"],
    ["weapon", "flamethrower"],
    ["weapon", "rocket launcher"],
    ["weapon", "katana"],
]

// use to clear screen with Start button Option 2
// $('#start').on('click', function() {
//     $('#game').text('');
//     $('#start').hide('');
// });

//prepare to start game
    function initializeGame(){
        lettersGuessed = [];
        answerArray = [];
        remainingLetters = 0;
        remainingGuesses = 5;
        //select word to be guessed and push underscores on screen
        currentWord = wordBank[Math.floor(Math.random()* (wordBank.length))];
        //loop thru the word selected and push the appropriate _ on the screen for player to guess
        for (var i = 0; i < currentWord.length; i++){
            answerArray.push("_");
        }
        //we are making these equivalent at start so we can decrement remainingLetters when user 
        remainingLetters = currentWord.length;
        $('#answer').text(answerArray);
    };

//start game
    initializeGame();
    $(document).ready(){
        //listen to player keypress and convert any capitalized to lowercase, not only looking at alphabet here?
        $(document).on('keypress', function(event)) {
            var userGuess = event.key.toLowerCase();
            //they have to have more than 1 remaining guess otherwise they lost
               if(remainingGuesses > 0){
            //push their letter guessed into storage of lettersGuessed, we are storing correct and incorrect letters
               lettersGuessed.push(userGuess);
            //we want to display letters guessed, both incorrect and correct values
               $("#lettersGuessed").text(lettersGuessed);
               currentWord.indexOf(userGuess);
            //indexOf returns -1 if pattern can't be found so if found it returns in index of first occurence, below we are saying
            //not equal to -1 so this is a condition where user guess is correct
               if(currentWord.indexOf(userGuess) !== -1){                      
                //for loop is looping thru currentWord and see if userGuess matches any letters and stores answer in answerArray to
                //be displayed on screen, it also decrements remainingLetters
                for (var j = 0; j < currentWord.length; j++){
                    if(currentWord[j]) === userGuess) {
                       answerArray[j] = userGuess;
                       remainingLetters--;
                    //we want to display "Score", I think this is in wrong place
                    $("#answer").text(answerArray);
                    $("#wins").text(wins);
                    $("#losses").text(losses);
                    $("#mistakesMade").text(mistakesMade);
                    $("#remainingGuesses").text(remainingGuesses);
                    //this indicates that you've won, increments your win score, and starts a new word
                    if (remainingLetters === 0)    
                        wins++;
                        answerArray = [];
                        lettersGuessed = [];
                        initializeGame();
                       }
                    } 
                //initializing var k to store when user guesses word that they've already guessed, no penalty     
                for (var k = 0; k < lettersGuessed.length; k++){
                    if(lettersGuessed[k] === userGuess){
                        alert('You already picked that, dumbass.')
                    }
                    //this stores incorrect letter in our lettersGuessed storage and pushes to screen
                    else{
                        lettersGuessed.push(userGuess);
                        $("#lettersGuessed").text(lettersGuessed);

                    }
                    //increments counter for wrong guesses and decrements remaining guesses 
                    else {
                        mistakesMade++
                        remainingGuesses--
                    }
                }
            }
        }
    }       //player has no more guesses left, loss counter is incremented, game starts over
            else {
            losses++;
            initializeGame();
            alert('Try again, loser.')
        }
    
 



// //generate alphabet
// var ABC = ("abcdefghijklmnopqrstuvwxyz").split("");

// //array holding word you are trying to guess
// var word2Guess = [];
// for (i = 0; i<word.length; i++){
//     dash.push("_"); 
// }

// //array holding dashes
// for (var i = 0; i < word.length; i++){
//     answerArray[i] = "_";
// }

// //function for answer array
// var setupAnswerArray = function(word){
// };

//variable for number of letters left to guess
// var remainingLetters = word.length;

//need to listen for letter selections - is this how?
// $(document).ready(function(){
//     $('#start').on('click', function() {
//         $('#game').text('');
//         $('#start').hide('');
//         $(document).on("keypress",function(event){
//             var userGuess = event.key.toLowerCase; //make sure all letters are lower case and compare to abc array, if user guess, do for loop thru ABC and confirm their guess is one of those letters
//             })
//     });
// });



  
// //loop thru remainingLetters and show correct guesses
// while (remainingLetters > 0){
//     alert(answerArray.join(""));
//     var guess = prompt("Select a letter, punk");
//     if (guess === null){
//         alert("Are you an idiot? Select a damn letter!");
//     }
//     else {
//         for (var j = 0; j < word.length; j++){
//             if(word[j] === guess){
//             ]   answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
// }

// //give answer + congratulate
//     alert(answerArray.join(""));
//     alert("I won't break your legs!  The answer was " + word);
// }


//need to track wins, how will i increment this?
//var wins = function(answerArray)
//alert("Escaped leg breaking: "+ var?)
//var counter = 0;
// for(var i=0; i < numberOptions.length; i++){

// }

//need to set and track number of guesses, I want to set # of guesses at 4 and then display a "you lose" message
//var counterGuess = 0; 
    //for (var k=0; k < 5; i++){}

