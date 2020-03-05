
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
    wins = 0;
    losses = 0;
    remainingGuesses = 5;
    mistakesMade = 0;
    currentWord = wordBank[Math.floor(Math.random()* (wordBank.length))];

    $('#game').hide();
    $('#start').hide();
    $('#wins').text("Wins: " + wins);
    $('#remainingGuesses').text("Guesses Left: " + remainingGuesses);
    $('#losses').text("Losses: " + losses);
    $('#mistakesMade').text("You are dumb: " + mistakesMade);
    console.log(currentWord);
    
    for (var i = 0; i < currentWord.length; i++){
        answerArray.push (" _ ");
        $('#current-word').text(answerArray);
        remainingLetters = currentWord.length;
    }
});
    
    
$(document).on('keypress', function(event){
    var userGuess = event.key.toLowerCase();
    
    if(currentWord.includes(userGuess)){
        currentWord.split("").forEach(function(letter, i){
            if(userGuess === letter){
                answerArray[i] = letter;
                $('#current-word').text(answerArray.join(""));
            }
        });
    } else {
        lettersGuessed.push(userGuess);
        $("#lettersGuessed").text(lettersGuessed.join(", "));
    }

    

});


          
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
                
            

            // if (remainingGuesses > 0){
        //     lettersGuessed.push(userGuess);
        //     $("#lettersGuessed").text(lettersGuessed);



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

