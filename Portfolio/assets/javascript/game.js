var userChoiceElem = document.getElementById("user-choice");
        
        var winsElem = document.getElementById("wins");
        var lossesElem = document.getElementById("losses");
        var guessesElem = document.getElementById("guesses");

        var wins = 0;
        var guesses = 9;
        var losses = 0;

        var myArray = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
        ];
    var keys = [];
    var randomItem

      var letter = function() {
        randomItem = myArray[Math.floor(Math.random() * myArray.length)];
       }
       

document.onkeydown = function (e) {
  var keyPress;

  if (typeof event !== 'undefined') {
    keyPress = event.keyCode;
  }
  else if (e) {
    keyPress = e.which;
  }

  keys.push(String.fromCharCode(keyPress));

  return false;  
};

        letter();
        console.log(randomItem)
        document.onkeyup = function (e) {
            var userInput = e.key;
            

            if (userInput !== randomItem) {
                guesses--;
            
            }

            if (guesses === 0) {
                losses++;
                guesses = 9;
                keys = [];
                letter();
                
            }

            
            if (userInput === randomItem) {
                console.log(randomItem)
                
                wins++;
                guesses = 9;
                keys.splice(0,keys.length)
                letter();
                console.log(randomItem)
            }
            
           

            userChoiceElem.textContent = keys;
            
            winsElem.textContent = wins;
            lossesElem.textContent = losses;
            guessesElem.textContent = guesses;
            

        }



