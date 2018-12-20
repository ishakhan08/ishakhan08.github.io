

var characters = {
	arya:
	{
		name: "Arya", 
		value: 0
	},
	cersie:
	{
		name: "Cersie", 
		value: 0
	},
	jon:
	{
		name: "Jon", 
		value: 0
	},
	jaime:
	{
		name: "Jaime", 
		value: 0
	},
};


          var currentScore = 0;
          var targetScore = 0;


          var winCount = 0;
          var lossCount = 0;

              var getRandom = function(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
              };

              //reset game
      var startGame = function() {

                
                currentScore = 0;

                
                targetScore = getRandom(19, 120);

            
            characters.arya.value = getRandom(1, 12);
            characters.cersie.value = getRandom(1, 12);
            characters.jaime.value = getRandom(1, 12);
            characters.jon.value = getRandom(1, 12);


            $("#your-number").html(currentScore);
            $("#throne-number").html(targetScore);


	console.log(" Arya: " + characters.arya.value + " Cersie: " + characters.cersie.value + " Jon: " + characters.jon.value + " Jaime: " + characters.jaime.value);
};


var addValues = function(characters) {


            currentScore = currentScore + characters.value;

            $("#your-number").html (currentScore);

            
            checkWin();


            console.log("Your Score: " + currentScore);

};

var checkWin = function() {
	
		
		if (currentScore > targetScore) {
			console.log("LOSE");
	
			
			lossCount++;
	

			$("#losses").html(lossCount);
	
		
			startGame();
	
	
		} else if (currentScore == targetScore) {
			console.log("WIN");
	
			
		winCount++;
		
			
				$("#wins").html(winCount);
		
				startGame();
			}
		}
	
		startGame();
		
		
		$("#arya").click(function() {
		
          addValues(characters.arya);
                 });
                  
                  $("#cersie").click(function() {
                  
                
                addValues(characters.cersie);
              });

                  $("#jaime").click(function() {


                    addValues(characters.jaime);
                  });

                  $("#jon").click(function() {

                addValues(characters.jon);
              });

