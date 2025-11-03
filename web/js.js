function variable() {
	heure = new Date().getHours();
	if (heure >= 6 && heure < 8) {message = "<h1>Bonne journée !</h1>";} else
	if (heure >= 8 && heure < 12) {message = "<h1>Elle commence bien cette journée ?</h1>";} else
	if (heure >= 12 && heure < 13) {message = "<h1>Il faut aller déjeûner !</h1>";} else
	if (heure >= 13 && heure < 17) {message = "<h1>Bon apres-midi !</h1>";} else
	if (heure >= 17 && heure < 22) {message = "<h1>Bonsoir</h1>";}
	else {message = "<h1>Vous ne dormez jamais?!</h1>";}
	document.writeln(message)
	document.writeln("<p>Il est " + heure + " heures.</p>");
}

// confirm("Voulez-vous ?");
