// ================================================================================================================= //
//                                                                                                                   //
//                                                     Mah-jong                                                      //
//                                                                                                                   //
// ================================================================================================================= //


const vents = ["🀃", "🀁", "🀀", "🀂"];
const ventsTexte = ["du Nord", "du Sud", "d'Est", "d'Ouest"];
const dragons = ["🀄", "🀅", "🀆"];
const dragonsTexte = ["rouge", "vert", "blanc"];
const caractere = ["🀇", "🀈", "🀉", "🀊", "🀋", "🀌", "🀍", "🀎", "🀏"];
const bambous = ["🀐", "🀑", "🀒", "🀓", "🀔", "🀕", "🀖", "🀗", "🀘"];
const ronds = ["🀙", "🀚", "🀛", "🀜", "🀝", "🀞", "🀟", "🀠", "🀡"];
const fleurs = ["🀢", "🀣", "🀤", "🀥"];
const fleursTexte = ["Fleur de prunier", "Orchidée", "Fleur de bambou", "Chrysanthème"];
const saisons = ["🀦", "🀧", "🀨", "🀩"];
const saisonsTexte = ["Printemps", "Été", "Automne", "Hiver"];

var paquet = [];
var paquetCentre = [];

var compteCracher = 0;
var comptePiocherMur = 0;
var compte1PiocherMur = 144 - 26 - 1;
var compte2PiocherMur = 144 - 36 - 1;
var compte3PiocherMur = 0;
var compte4PiocherMur = 36;
var compte5PiocherMur = 144 - 6 - 1;
var compteRemplacer = 8 - 1;

var bascule2PiocherMur = true;
var bascule4PiocherMur = true;

class Tuile {

	constructor(force, famille) {
		this.force = force;
		this.famille = famille;
		if (this.famille == "vents") {
			this.unicode = vents[this.force - 1];
		} else if (this.famille == "dragons") {
			this.unicode = dragons[this.force - 1];
		} else if (this.famille == "caractères") {
			this.unicode = caractere[this.force - 1];
		} else if (this.famille == "bambous") {
			this.unicode = bambous[this.force - 1];
		} else if (this.famille == "ronds") {
			this.unicode = ronds[this.force - 1];
		} else if (this.famille == "fleurs") {
			this.unicode = fleurs[this.force - 1];
		} else if (this.famille == "saisons") {
			this.unicode = saisons[this.force - 1];
		}
	}

	nom() {
		if (this.famille == "vents") {
			return `Vent ${ventsTexte[this.force - 1]}`;
		} else if (this.famille == "dragons") {
			return `Dragon ${dragonsTexte[this.force - 1]}`;
		} else if (this.famille == "fleurs") {
			return `${fleursTexte[this.force - 1]}`;
		} else if (this.famille == "saisons") {
			return `${saisonsTexte[this.force - 1]}`;
		} else {
			return `${this.force} de ${this.famille}`;
		}
	}

}

function nouvellePartie() {

	var paquetOrdre = [];

	for (var i = 4; i >= 1; i--) {
		tuile = new Tuile(i, "fleurs");
		paquetOrdre.push(tuile);
	}
	for (var i = 4; i >= 1; i--) {
		tuile = new Tuile(i, "saisons");
		paquetOrdre.push(tuile);
	}
	for (var j = 3; j >= 0; j--) {
		for (var i = 4; i >= 1; i--) {
			tuile = new Tuile(i, "vents");
			paquetOrdre.push(tuile);
		}
		for (var i = 3; i >= 1; i--) {
			tuile = new Tuile(i, "dragons");
			paquetOrdre.push(tuile);
		}
		for (var i = 9; i >= 1; i--) {
			tuile = new Tuile(i, "caractères");
			paquetOrdre.push(tuile);
		}
		for (var i = 9; i >= 1; i--) {
			tuile = new Tuile(i, "bambous");
			paquetOrdre.push(tuile);
		}
		for (var i = 9; i >= 1; i--) {
			tuile = new Tuile(i, "ronds");
			paquetOrdre.push(tuile);
		}
	}

	paquet = [];

	for (var i = paquetOrdre.length - 1; i >= 0; i--) {
		var index = Math.floor(Math.random() * (paquetOrdre.length - 1));
		paquet.push(paquetOrdre[index]);
		paquetOrdre.splice(index, 1);
	}

}

function distribution(argument) {

	for (var i = 13 - 1; i >= 0; i--) {
		document.getElementsByClassName("td-main")[i].innerHTML = "<a onclick = cracher(this) class = a-tuiles-main>" + paquet[i].unicode + "</a>";
		document.getElementsByClassName("td-main")[i].title = paquet[i].nom();
	}
	for (var i = 13 * 4 - 1; i >= 0; i--) {
		piocherMur(false);
	}

}

function cracher(tuile) {

	var tuilesMain = document.getElementsByClassName("a-tuiles-main");
	var index = Array.prototype.indexOf.call(tuilesMain, tuile);
	var tuileCracher = paquet[index];
	var tuileCracherForce = tuileCracher.force - 1;
	if (tuileCracher.famille == "fleurs") {
		document.getElementsByClassName("a-tuiles-fleurs")[tuileCracherForce].innerHTML = tuileCracher.unicode;
		document.getElementsByClassName("a-tuiles-fleurs")[tuileCracherForce].title = tuileCracher.nom();
		remplacer();
	} else if (tuileCracher.famille == "saisons") {
		document.getElementsByClassName("a-tuiles-saisons")[tuileCracherForce].innerHTML = tuileCracher.unicode;
		document.getElementsByClassName("a-tuiles-saisons")[tuileCracherForce].title = tuileCracher.nom();
		remplacer();
	} else {
		paquetCentre.push(tuileCracher);
		document.getElementsByClassName("td-centre")[compteCracher].innerHTML = "<a onclick = piocherCentre(this) class = a-tuiles-centre>" + tuileCracher.unicode + "</a>";
		document.getElementsByClassName("a-tuiles-centre")[compteCracher].title = tuileCracher.nom();
		compteCracher++;
	}
	document.getElementsByClassName("a-tuiles-main")[index].innerHTML = "";

}

function piocherCentre(tuile) {

	var tuilesCentre = document.getElementsByClassName("a-tuiles-centre");
	var index = Array.prototype.indexOf.call(tuilesCentre, tuile);
	var tuilePiocherCentre = paquetCentre[index];
	document.getElementById("pioche-main").innerHTML = "<a id = a-pioche-main>" + tuilePiocherCentre.unicode + "</a>";
	document.getElementById("a-pioche-main").title = tuilePiocherCentre.nom();
	document.getElementsByClassName("td-centre")[index].innerHTML = "<a class = a-tuiles-centre></a>";

}

function piocherMur(afficherPioche) {

	var tuilePiocherMur = paquet[144 - 1 - comptePiocherMur];
	if (comptePiocherMur < 12) {
		if (comptePiocherMur % 2 == 0) {
			document.getElementsByClassName("td-mur")[Math.floor(compte1PiocherMur / 2)].innerHTML = "<a onclick = piocherMur() class = a-tuiles-mur>🀫</a>";
		} else {
			document.getElementsByClassName("td-mur")[Math.floor(compte1PiocherMur / 2)].innerHTML = "";
		}
		compte1PiocherMur--;
	} else if (comptePiocherMur < 46) {
		if (bascule2PiocherMur) {
			if (compte2PiocherMur % 2 == 1) {
				document.getElementsByClassName("td-mur")[Math.floor(compte2PiocherMur / 2) - 2].innerHTML = "<a onclick = piocherMur() class = a-tuiles-mur>🀫</a>";
			} else {
				document.getElementsByClassName("td-mur")[Math.floor(compte2PiocherMur / 2) - 2].innerHTML = "";
				compte2PiocherMur--;
				compte2PiocherMur--;
				bascule2PiocherMur = true;
			}
		} else {
			if (compte2PiocherMur % 2 == 1) {
				document.getElementsByClassName("td-mur")[Math.floor(compte2PiocherMur / 2)].innerHTML = "<a onclick = piocherMur() class = a-tuiles-mur>🀫</a>";
			} else {
				document.getElementsByClassName("td-mur")[Math.floor(compte2PiocherMur / 2)].innerHTML = "";
				bascule2PiocherMur = true;
			}
		}
		compte2PiocherMur--;
	} else if (comptePiocherMur < 84) {
		if (comptePiocherMur % 2 == 0) {
			document.getElementsByClassName("td-mur")[Math.floor(compte3PiocherMur / 2)].innerHTML = "<a onclick = piocherMur() class = a-tuiles-mur>🀫</a>";
		} else {
			document.getElementsByClassName("td-mur")[Math.floor(compte3PiocherMur / 2)].innerHTML = "";
		}
		compte3PiocherMur++;
	} else if (comptePiocherMur < 118) {
		if (bascule4PiocherMur) {
			if (compte4PiocherMur % 2 == 0) {
				document.getElementsByClassName("td-mur")[Math.floor(compte4PiocherMur / 2) + 2].innerHTML = "<a onclick = piocherMur() class = a-tuiles-mur>🀫</a>";
			} else {
				document.getElementsByClassName("td-mur")[Math.floor(compte4PiocherMur / 2) + 2].innerHTML = "";
				compte4PiocherMur++;
				compte4PiocherMur++;
				bascule4PiocherMur = true;
			}
		} else {
			if (compte4PiocherMur % 2 == 1) {
				document.getElementsByClassName("td-mur")[Math.floor(compte4PiocherMur / 2)].innerHTML = "<a onclick = piocherMur() class = a-tuiles-mur>🀫</a>";
			} else {
				document.getElementsByClassName("td-mur")[Math.floor(compte4PiocherMur / 2)].innerHTML = "";
				bascule4PiocherMur = true;
			}
		}
		compte4PiocherMur++;
	} else {
		if (comptePiocherMur % 2 == 0) {
			document.getElementsByClassName("td-mur")[Math.floor(compte5PiocherMur / 2)].innerHTML = "<a onclick = piocherMur() class = a-tuiles-mur>🀫</a>";
		} else {
			document.getElementsByClassName("td-mur")[Math.floor(compte5PiocherMur / 2)].innerHTML = "";
		}
		compte5PiocherMur--;
	}
	if (afficherPioche) {
		document.getElementById("pioche-main").innerHTML = "<a id = a-pioche-main>" + tuilePiocherMur.unicode + "</a>";
		document.getElementById("a-pioche-main").title = tuilePiocherMur.nom();
	}
	comptePiocherMur++;

}

function joueurSuivant() {

	// enregistrer les changements
	// passer la main
	// verrouillage de la tuile crachée au tour précédent
	var tuileCrachee = document.getElementsByClassName("a-tuiles-centre")[document.getElementsByClassName("a-tuiles-centre").length].innerHTML;

}

function remplacer() {

	var tuileRemplacer = paquet[144 - 1 - compteRemplacer];
	document.getElementsByClassName("tresHaut")[compteRemplacer].innerHTML = "";
	document.getElementById("pioche-main").innerHTML = "<a id = a-pioche-main>" + tuileRemplacer.unicode + "</a>";
	document.getElementById("a-pioche-main").title = tuileRemplacer.nom();
	compteRemplacer--;

}

function chow() {}

function estChow(tuile1, tuile2, tuile3) {
	if (tuile1.famille == tuile2.famille && tuile1.famille == tuile3.famille) {
		if (tuile1.force - tuile2.force == 1 && tuile2.force - tuile3.force == 1) {
			return true;
		}
	}
	return false;
}

function pung() {

	// try {
	// 	var aMain = document.getElementsByClassName("a-main");
	// } catch (error) {
	// 	// 
	// }
	// try {
	// 	var piocheMain = document.getElementById("pioche-main");
	// } catch (error) {
	// 	// 
	// }
	// try {
	// 	var aCentre  = document.getElementById("a-centre");
	// } catch {
	// 	// 
	// }
	// try {
	// 	var tuiles = Array.from(aMain);
	// } catch {
	// 	// 
	// }
	// tuiles.push(piocheMain, aCentre);
	// tuiles.forEach(
	// 	(tuile) => {
	// 		tuile.addEventListener(
	// 			"click",
	// 			() => {
	// 				tuile.classList.toggle("selectionne");
	// 			}
	// 		);
	// 	}
	// );

}

function estPung(tuile1, tuile2, tuile3) {
	if (tuile1.unicode == tuile2.unicode && tuile1.unicode == tuile3.unicode) {
		return true;
	}
	return false;
}

function kong() {}

function estKong(tuile1, tuile2, tuile3, tuile4) {}

function mahjong() {}

function estPaire(tuile1, tuile2) {
	if (tuile1.unicode == tuile2.unicode) {
		return true;
	}
	return false;
}

function selectionner(element) {
	element.style.backgroundColor = "red";
}


// ================================================================================================================= //
//                                                                                                                   //
//                                                     Mah-jong                                                      //
//                                                                                                                   //
// ================================================================================================================= //