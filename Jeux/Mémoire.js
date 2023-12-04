// ================================================================================================================= //
//                                                                                                                   //
//                                                        Jeux                                                       //
//                                                                                                                   //
// ================================================================================================================= //


cards = [
	{id: 1, value: "A", flipped: false},
	{id: 2, value: "B", flipped: false},
	{id: 3, value: "A", flipped: false},
	{id: 4, value: "B", flipped: false},
	{id: 5, value: "C", flipped: false},
	{id: 6, value: "D", flipped: false},
	{id: 7, value: "C", flipped: false},
	{id: 8, value: "D", flipped: false},
	{id: 9, value: "E", flipped: false},
	{id: 10, value: "F", flipped: false},
	{id: 11, value: "E", flipped: false},
	{id: 12, value: "F", flipped: false},
	{id: 13, value: "G", flipped: false},
	{id: 14, value: "H", flipped: false},
	{id: 15, value: "G", flipped: false},
	{id: 16, value: "H", flipped: false}
];
cards.sort(() => Math.random() - 0.5);
pairsFound = 0;

function flipCard(card) {

	if (card.flipped) {return;}
	card.flipped = true;
	card.element.classList.add("flip");
	flippedCards = cards.filter(c => c.flipped && !c.matched);
	if (flippedCards.length === 2) {
		[card1, card2] = flippedCards;
		if (card1.value === card2.value) {
			card1.matched = true;
			card2.matched = true;
			pairsFound++;
			if (pairsFound === cards.length / 2) {
				setTimeout(function() {alert("Félicitations, vous avez gagné !");}, 500);
			}
		} else {
			setTimeout(
				function() {
					card1.flipped = false;
					card2.flipped = false;
					card1.element.classList.remove("flip");
					card2.element.classList.remove("flip");
				},
				1000
			);
		}
	}

}

gameBoard = document.getElementById("gameBoard");
cards.forEach(
	function(card) {
		cardElement = document.createElement("div");
		cardElement.className = "card";
		cardElement.setAttribute("data-value", card.value);
		card.element = cardElement;
		cardElement.addEventListener("click", function() {flipCard(card);});
		gameBoard.appendChild(cardElement);
	}
);


// ================================================================================================================= //
//                                                                                                                   //
//                                                        Jeux                                                       //
//                                                                                                                   //
// ================================================================================================================= //