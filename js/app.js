
$(document).ready(function(){
	
	// GLobal variable
	var randomNum = Math.floor(Math.random() * 100) + 1;
	console.log(randomNum);
	// when new game is clicked
	$("a.new").click(function(){
		alert();

		
		// set guesses = 0
		// generate a random number between 1 and 100
		// if else sate ment decides what the action should be taken
	});

	$("#guessButton").click(function(event){
		event.preventDefault();

		// Varibales
		var user_choice = document.getElementById('userGuess')
		var user_choice_val = user_choice.value;
		var user_choice_num = Number(user_choice_val);
		var finale_value = Math.abs(randomNum - user_choice_num);

		if ((user_choice_num < 0 || user_choice_num > 100) || (!$.trim($('#userGuess').val()))){
			alert("Please enter an number between 0 and 100");
		}
		else {
			$('<li>').appendTo("#guessList").html(user_choice_num);
			document.getElementById('userGuess').value = '';
			var counter = $("#count")
			counter.html( parseInt(counter.html()) + 1 )

			//add number to li guess list};
		if (finale_value >= 50) {
			$('#feedback').html('Ice Cold');
			// print "Ice Cold Sucka"
		}
			// user number is between 30 and 50 away from random number
		else if (finale_value < 50 && finale_value >= 30)  {
			$('#feedback').html('Cold');
			// print "Cold"
		}
		else if (finale_value < 30 && finale_value >= 20) {
			$('#feedback').html('Warm');
			// print "Warm" 
		}
		else if (finale_value < 20 && finale_value >= 10) {
			$('#feedback').html('Hot');
			// print "Hot" 
		}
		else if (finale_value < 10 && finale_value >= 1) {
			$('#feedback').html('Super Hot');
			// print "Hot as the Sun Hot" 
		}
	};
	});


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});


  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


				
