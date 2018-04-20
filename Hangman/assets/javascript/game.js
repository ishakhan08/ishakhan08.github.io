var wordlist = [
    ["C", "H", "I", "C", "A", "G", "O"],
      ["A","U","S","T","I","N"],
      ["D","A","L","L","A","S"],
      ["D","E","T","R","O","I","T"],
      ["S","E","A","T","T","L","E"],
      ["N","E","W","A","R","K"]
    ]
    var random = Math.floor((Math.random()*(wordlist.length-1))); 
    
    var newword = wordlist[random]; 
    var randdomword = new Array(newword.length);
    var initial = 0;
    
    
    for (var i = 0; i < randdomword.length; i++){
        randdomword[i] = "_ ";
    }
    

    function printranddomword(){
        for (var i = 0; i < randdomword.length; i++){
        var demo = document.getElementById("demo");
        var guessword = document.createTextNode(randdomword[i]);
        demo.appendChild(guessword);
        }
    }
    
    
    var enter = function(){
        var f = document.wordform; 
        var b = f.elements["wordtext"];
        var userGuess = b.value;
        userGuess = userGuess.toUpperCase();
        for (var i = 0; i < newword.length; i++){
            if(newword[i] === userGuess){
                randdomword[i] = userGuess + " ";
                var answer = true;
            }
        b.value = "";
        }
        
       
        var demo = document.getElementById("demo");
        demo.innerHTML=""; 
        printranddomword();
        
       if(!answer){
            var wrongletter = document.getElementById("wrongletter");
            var guessword = document.createTextNode(" " + userGuess);
            wrongletter.appendChild(guessword); 
            initial++;
            var hangman = document.getElementById("hangman");
        hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + initial + ".png";
        }
        
        var letterlist = true;
        for (var i = 0; i < randdomword.length; i++){
            if(randdomword[i] === "_ "){
                letterlist = false;
            }
        }
        if(letterlist){
            window.alert("You win!");
        }
        
        if(initial === 6){
            window.alert("Uh...I guess you're dead now.");
        }
    }
    
    function init(){
        printranddomword();
    }
    
    window.onload = init;
    
    
    