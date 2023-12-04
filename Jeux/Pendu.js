// ================================================================================================================= //
//                                                                                                                   //
//                                                        Jeux                                                       //
//                                                                                                                   //
// ================================================================================================================= //


words = ["chien", "chat", "maison", "jardin", "voiture", "soleil"];
secretWord = words[Math.floor(Math.random() * words.length)];
wordLength = secretWord.length;
hangmanSteps = [
	" +---+\n |   |\n     |\n     |\n     |\n     |\n",
	" +---+\n |   |\n ☻   |\n     |\n     |\n     |\n",
	" +---+\n |   |\n ☻   |\n |   |\n     |\n     |\n",
	" +---+\n |   |\n ☻   |\n/|   |\n     |\n     |\n",
	" +---+\n |   |\n ☻   |\n/|\\  |\n     |\n     |\n",
	" +---+\n |   |\n ☻   |\n/|\\  |\n/    |\n     |\n",
	" +---+\n |   |\n ☻   |\n/|\\  |\n/ \\  |\n     |\n"
];
attemptsLeft = 6;
lettersFound = 0;
displayWord = "";
for (var i = 0; i < wordLength; i++) {displayWord += "_ ";}
wordDisplay.textContent = displayWord.trim();
guessButton.addEventListener("click", function() {
	guess = guessInput.value.toLowerCase();
	
	if (guess.length !== 1 || !guess.match(/[a-z]/i)) {
		message.textContent = "Veuillez entrer une lettre de l'alphabet.";
	} else {
		newDisplayWord = "";
		correctGuess = false;
		for (var i = 0; i < wordLength; i++) {
			if (secretWord[i] === guess) {
				newDisplayWord += guess + " ";
				correctGuess = true;
				lettersFound++;
			} else {
				newDisplayWord += wordDisplay.textContent[i * 2] + " ";
			}
		}
		wordDisplay.textContent = newDisplayWord.trim();
		guessInput.value = "";
		guessInput.focus();
		if (correctGuess) {
			if (lettersFound === wordLength) {
				message.textContent = "Félicitations ! Vous avez deviné le mot.";
				guessInput.disabled = true;
				guessButton.disabled = true;
			} else {
				message.textContent = "Bonne devinette !";
			}
		} else {
			message.textContent = "Ce n'est pas une bonne lettre. Essayez encore !";
			attemptsLeft--;
			updateHangmanImage();
			if (attemptsLeft === 0) {
				message.textContent = "Dommage, vous avez perdu. Le mot était : " + secretWord;
				guessInput.disabled = true;
				guessButton.disabled = true;
			}
		}
	}
});

function updateHangmanImage() {hangmanStepsDisplay.textContent = hangmanSteps[6 - attemptsLeft];}


// ================================================================================================================= //
//                                                                                                                   //
//                                                        Jeux                                                       //
//                                                                                                                   //
// ================================================================================================================= //