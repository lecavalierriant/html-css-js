// ================================================================================================================= //
//                                                                                                                   //
//                                                        Jeux                                                       //
//                                                                                                                   //
// ================================================================================================================= //

points = 0;
coefficient = 1;
document.addEventListener("keydown", touchePressee);
document.addEventListener("keyup", toucheLiberee);
droite = false;
gauche = false;

function touchePressee(evenement) {

	if (evenement.key === "ArrowRight") {
		droite = true;
	} else if (evenement.key === "ArrowLeft") {
		gauche = true;
	}

}

function toucheLiberee(evenement) {

	if (evenement.key === "ArrowRight") {
		droite = false;
	} else if (evenement.key === "ArrowLeft") {
		gauche = false;
	}

}

function afficherJoueur() {

	contexte.beginPath();
	contexte.rect(joueur.x, joueur.y, joueur.width, joueur.height);
	contexte.fillStyle = joueur.color;
	contexte.fill();
	contexte.closePath();

}

function dessinerCible() {

	contexte.beginPath();
	contexte.rect(cible.x, cible.y, cible.width, cible.height);
	contexte.fillStyle = cible.color;
	contexte.fill();
	contexte.closePath();

}

function detecterCollisions() {

	if (
		joueur.x < cible.x + cible.width &&
		joueur.x + joueur.width > cible.x &&
		joueur.y < cible.y + cible.height &&
		joueur.y + joueur.height > cible.y
	) {
		points++;
		cible.x = Math.random() * (canvas.width - cible.width);
		cible.y = 0;
		cible.speed += 0.2 * coefficient;
		coefficient = coefficient / 1.1;
	}

}

function dessinerPoints() {

	contexte.font = "100% georgia";
	contexte.fillStyle = "#333333";
	contexte.fillText("Score : " + points, 10, 20);

}

function rafraichir() {

	contexte.clearRect(0, 0, canvas.width, canvas.height);
	if (droite && joueur.x < canvas.width - joueur.width) {
		joueur.x += 5;
	} else if (gauche && joueur.x > 0) {
		joueur.x -= 5;
	}
	cible.y += cible.speed;
	afficherJoueur();
	dessinerCible();
	detecterCollisions();
	dessinerPoints();
	requestAnimationFrame(rafraichir);
	
}

function initialisation() {

	contexte = canvas.getContext("2d");

	joueur = {
		x: canvas.width / 2,
		y: canvas.height - 30,
		width: 20,
		height: 20,
		color: "#213363"
	};

	cible = {
		x: canvas.width / 2,
		y: 0,
		width: 30,
		height: 30,
		color: "#8eac50",
		speed: 2
	};
	rafraichir();

}


// ================================================================================================================= //
//                                                                                                                   //
//                                                        Jeux                                                       //
//                                                                                                                   //
// ================================================================================================================= //