
// // Wins: (# of times user guessed the word correctly).
// // If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
// // As the user guesses the correct letters, reveal them: m a d o _  _ a.
// // Number of Guesses Remaining: (# of guesses remaining for the user).
// // Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
// // After the user wins/loses the game should automatically choose another word and make the user play it.

//nested array and variables relating to nested array
// var wordBank = [
//     ["mission", "waste the wife"],
//     ["mission", "ambulance"],
//     ["mission", "rampage"],
//     ["character", "tommy vercetti"],
//     ["character", "candy suxxx"],
//     ["character", "love fist"],
//     ["song", "i ran so far away"],
//     ["song", "sunglasses at night"],
//     ["vehicle", "infernus"],
//     ["vehicle", "helicopter"],
//     ["weapon", "flamethrower"],
//     ["weapon", "rocket launcher"],
//     ["weapon", "katana"],
// ]
// var indexPair;
// var hint = indexPair[0];
// var currentWord = indexPair[1];

// declare variables
var wins;
var losses;
var remainingGuesses;
var mistakesMade;
var lettersGuessed = [];
var answerArray = [];
var currentWord = [];
var ABC = ("abcdefghijklmnopqrstuvwxyz").split("");

var wordBank = [
    "waste the wife",
    "ambulance",
    "rampage",
    "tommy vercetti",
    "candy suxxx",
    "love fist",
    "i ran so far away",
    "sunglasses at night",
    "infernus",
    "helicopter",
    "flamethrower",
    "rocket launcher",
    "katana",
]

// use to clear screen with Start button and initialize game
$('#start').on('click', function() {
    $('#game').hide();
    $('#start').hide();
    var wins = 0;
    $('#wins').text("Wins: " + wins);
    var losses = 0;
    $('#losses').text("Losses: " + losses);
    var remainingGuesses = 5;
    $('#remainingGuesses').text("Guesses Left: " + remainingGuesses);
    var mistakesMade = 0;
    $('#mistakesMade').text("You are dumb: " + mistakesMade);
});


// // prepare to start game
function initializeGame(){
    lettersGuessed = [];
    answerArray = [];
    remainingLetters = 0;
    remainingGuesses = 5;
    //select word to be guessed and push underscores on screen
    currentWord = wordBank[Math.floor(Math.random()* (wordBank.length))];
    //loop thru the word selected and push the appropriate _ on the screen for player to guess
    for (var i = 0; i < currentWord.length; i++){
        var currentWord = wordBank[i];
        console.log(currentWord);

            // for(var j = 0; j < currentWord.length; j++){
            //     display("currentWord["+ i +"]["+ j + "] = " + currentWord[j]);
            //     }
            // }
            answerArray.push("_");
        }
        //we are making these equivalent at start so we can decrement remainingLetters when user 
        remainingLetters = currentWord.length;
        $('#answer').text(answerArray);
    };

//start game
    initializeGame();
    //listen to player keypress and convert any capitalized to lowercase, not only looking at alphabet here?
        $(document).on('keypress', function(event) {
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
                for (var k = 0; k < currentWord.length; k++){
                    if(currentWord[k] === userGuess) {
                       answerArray[k] = userGuess;
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
                //initializing var l to store when user guesses word that they've already guessed, no penalty     
                for (var l = 0; l < lettersGuessed.length; l++){
                    if(lettersGuessed[k] === userGuess){
                        alert('You already picked that, dumbass.')
                    }
                    //this stores incorrect letter in our lettersGuessed storage and pushes to screen;
                    //increments counter for wrong guesses and decrements remaining guesses 
                    else{
                        lettersGuessed.push(userGuess);
                        $("#lettersGuessed").text(lettersGuessed);
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
    });

}