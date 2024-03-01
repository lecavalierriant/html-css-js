// ================================================================================================================= //
//                                                                                                                   //
// ================================================================================================================= //


var heure = new Date().getHours();

// ================================================================================================================= //
//                                                                                                                   //
// ================================================================================================================= //

function page() {

	"use strict";
	document.writeln("<!DOCTYPE html><head><link rel = stylesheet href = css.css><script src = js.js></script><title>HTML</title></head><div class = divAnimation1>divAnimation1</div><div class = divAnimation1>divAnimation1</div><button onclick = messageVariable()>messageVariable()</button><button onclick = sourceVariable()>sourceVariable()</button><form action = html.html method = get><input type = password name = motDePasse> password<br><br><input type = radio name = entreeRadio checked><input type = radio name = entreeRadio> radio<br><br><input type = checkbox name = caseACocher checked><input type = checkbox name = caseACocher> checkbox<br><br><input type = color name = couleur> color<br><br><input type = file name = fichier> file<br><br><input type = number name = nombre> number<br><br><input type = range name = potentiometre> range<br><br><input type = time name = heure> time<br><br><input type = datetime-local name = dateComplete> datetime-local<br><br><input type = week name = semaine> week<br><br><input type = month name = mois> month<br><br><input type = url name = entreeUrl> url</form>");

}

var message = "";

function messageVariable() {

	if (heure >= 6 && heure < 8) {message = "<h1>Bonne journée !</h1>";}
	else if (heure >= 8 && heure < 12) {message = "<h1>Elle commence bien cette journée ?</h1>";}
	else if (heure >= 12 && heure < 13) {message = "<h1>Il faut aller manger !</h1>";}
	else if (heure >= 13 && heure < 17) {message = "<h1>Bon apres-midi !</h1>";}
	else if (heure >= 17 && heure < 22) {message = "<h1>Bonsoir</h1>";}
	else {message = "<h1>Vous ne dormez jamais?!</h1>";}
	document.writeln(message);
	page();

}

var source = "";

function sourceVariable() {

	if (heure >= 6 && heure < 8) {source = "image1.png";}
	else if (heure >= 8 && heure < 12) {source = "image1.png";}
	else if (heure >= 12 && heure < 13) {source = "image2.png";}
	else if (heure >= 13 && heure < 17) {source = "image2.png";}
	else if (heure >= 17 && heure < 22) {source = "image3.png";}
	else {source = "image3.png";}
	document.writeln("<img src = " + source +" alt = " + source + ">");
	page();

}

// confirm("Voulez-vous ?");
// sorte d'alert() avec un bouton « Annuler » et un autre « OK »


// ================================================================================================================= //
//                                                                                                                   //
// ================================================================================================================= //