
$(document).ready(function(){
	
	// when new game is clicked
	$("a.new").click(function(){
		alert();

		
		// set guesses = 0
		// generate a random number between 1 and 100
		// if else sate ment decides what the action should be taken
	});

	$("#guessButton").click(function(){
		

		// Varibales
		var user_choice = document.getElementById('userGuess')
		var user_choice_val = user_choice.value;
		var user_choice_num = Number(user_choice_val);

		if (user_choice_num < 0 || user_choice_num > 100) {
			alert("Please enter an number between 0 and 100");
		}
		else {
			$('<li>').appendTo("#guessList").html(user_choice_num);
			document.getElementById('userGuess').value = '';
			console.log(user_choice_num);
			//add number to li guess list
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


