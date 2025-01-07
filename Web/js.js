// ================================================================================================================= //
//                                                                                                                   //
// ================================================================================================================= //

var heure = new Date().getHours();

function page() {
	"use strict";
	document.writeln("<p>Nouvelle page</p>");
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

// Fontions des listes

liste = [0, 0, 1, 1, 2, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9];

console.log(liste);

// ================================================================================================================= //
//                                                                                                                   //
// ================================================================================================================= //
