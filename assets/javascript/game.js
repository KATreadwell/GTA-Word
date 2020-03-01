
// declare variables
var wins;
var losses;
var remainingGuesses;
var mistakesMade;
var userGuess;
var lettersGuessed = [];
var answerArray = [];
var currentWord = [];

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
];

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
    var currentWord = wordBank[Math.floor(Math.random()* (wordBank.length))];
    console.log(currentWord)

    for (var i = 0; i < currentWord.length; i++){
        answerArray.push (" _ ");
        console.log(answerArray)
        $('#current-word').text(answerArray);
        remainingLetters = currentWord.length;
        $('#answer').text(answerArray);
    }
    });
    
    
$(document).on('keypress', function(event){
    var userGuess = event.key.toLowerCase();
    if(lettersGuessed.push(userGuess)){
        $("#lettersGuessed").text(lettersGuessed);
        currentWord.indexOf(userGuess);
    }
    });



    // for (var j = 0; j < currentWord.length; j++){
    // console.log(userGuess)
    // if(currentWord[j] === userGuess){
    // answerArray[j] = userGuess;
    // $("#current-word").text(currentWord);
    // console.log(userGuess)
    //         }
    //     }
    // })
    
    
    

    //         if (currentWord.indexOf(userGuess) !== -1){
    //             for (var j = 0; j < currentWord.length; j++){
    //                 if(currentWord[j] === userGuess){
    //                     answerArray[j] = userGuess;
    //                     $("#current-word").text(currentWord);
    //                     remainingLetters--;
    //                     $("#wins").text(wins);
    //                     $("#losses").text(losses);
    //                     $("#mistakesMade").text(mistakesMade);
    //                     $("#remainingGuesses").text(remainingGuesses);
    //                     }
    //                 if (remainingLetters === 0){
    //                     wins++
    //                     answerArray = [];
    //                     lettersGuessed = [];
    //                     event();
    //                     }
    //                 }
    //             }
    //     }
    // })
                
            

        // console.log('user guess', userGuess)

            // if (remainingGuesses > 0){
        //     lettersGuessed.push(userGuess);
        //     $("#lettersGuessed").text(lettersGuessed);
        //     currentWord.indexOf(userGuess);
        // })
    //      if (currentWord.indexOf(userGuess) !== -1){            
    //         }
    //     }
    // })
    //     for (var k = 0; k <lettersGuessed.length; k++){
            // if(lettersGuessed[k] === userGuess){
            //     alert('You already picked that, idiot.')
            //     console.log(userGuess)
            // }

    //             else{
    //                 mistakesMade++;
    //                 remainingGuesses--
    //                 };
    //         }
    //         else{
    //             losses++;
    //             event();
    //             }
    //     }
    // }

