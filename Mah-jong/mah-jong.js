// ================================================================================================================= //
//                                                                                                                   //
//                                                     Mah-jong                                                      //
//                                                                                                                   //
// ================================================================================================================= //


vents = ["🀃", "🀁", "🀀", "🀂"];
ventsTexte = ["du Nord", "du Sud", "d'Est", "d'Ouest"];
dragons = ["🀄", "🀅", "🀆"];
dragonsTexte = ["rouge", "vert", "blanc"];
caractere = ["🀇", "🀈", "🀉", "🀊", "🀋", "🀌", "🀍", "🀎", "🀏"];
bambous = ["🀐", "🀑", "🀒", "🀓", "🀔", "🀕", "🀖", "🀗", "🀘"];
ronds = ["🀙", "🀚", "🀛", "🀜", "🀝", "🀞", "🀟", "🀠", "🀡"];
fleurs = ["🀢", "🀣", "🀤", "🀥"];
fleursTexte = ["Fleur de prunier", "Orchidée", "Fleur de bambou", "Chrysanthème"];
saisons = ["🀦", "🀧", "🀨", "🀩"];
saisonsTexte = ["Printemps", "Été", "Automne", "Hiver"];
paquet = [];
paquetCentre = [];
compteCracher = 0;
comptePiocherMur = 0;
compte1PiocherMur = 144 - 26 - 1;
compte2PiocherMur = 144 - 36 - 1;
compte3PiocherMur = 0;
compte4PiocherMur = 36;
compte5PiocherMur = 144 - 8 - 1;
compteRemplacer = 8 - 1;
bascule2PiocherMur = true;
bascule4PiocherMur = true;
basculeVerouillageBoutons = true;
basculeSelectionner = true;
basculeValider = true;
annonce = "";
combinaisons = 0;

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
			return "Vent " + ventsTexte[this.force - 1];
		} else if (this.famille == "dragons") {
			return "Dragon " + dragonsTexte[this.force - 1];
		} else if (this.famille == "fleurs") {
			return fleursTexte[this.force - 1];
		} else if (this.famille == "saisons") {
			return saisonsTexte[this.force - 1];
		} else {
			return this.force + " de " + this.famille;
		}

	}

}

class TuileUnicode {

	constructor(unicode) {

		for (var i = vents.length - 1; i >= 0; i--) {
			if (unicode == vents[i]) {
				this.famille = "vents";
				this.force = i;
				return;
			}
		}
		for (var i = dragons.length - 1; i >= 0; i--) {
			if (unicode == dragons[i]) {
				this.famille = "dragons";
				this.force = i;
				return;
			}
		}
		for (var i = caractere.length - 1; i >= 0; i--) {
			if (unicode == caractere[i]) {
				this.famille = "caractères";
				this.force = i;
				return;
			}
		}
		for (var i = bambous.length - 1; i >= 0; i--) {
			if (unicode == bambous[i]) {
				this.famille = "bambous";
				this.force = i;
				return;
			}
		}
		for (var i = ronds.length - 1; i >= 0; i--) {
			if (unicode == ronds[i]) {
				this.famille = "ronds";
				this.force = i;
				return;
			}
		}
		for (var i = fleurs.length - 1; i >= 0; i--) {
			if (unicode == fleurs[i]) {
				this.famille = "fleurs";
				this.force = i;
				return;
			}
		}
		for (var i = saisons.length - 1; i >= 0; i--) {
			if (unicode == saisons[i]) {
				this.famille = "saisons";
				this.force = i;
				return;
			}
		}

	}

	tuile() {

		tuile = new Tuile(this.force, this.famille);
		return tuile;

	}

}

function nouveauPaquet() {

	paquetOrdre = [];
	for (var i = 4; i >= 1; i--) {
		tuile = new Tuile(i, "fleurs");
		paquetOrdre.push(tuile);
	}
	for (var i = 4; i >= 1; i--) {
		tuile = new Tuile(i, "saisons");
		paquetOrdre.push(tuile);
	}
	for (var j = 4; j >= 1; j--) {
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
		index = Math.floor(Math.random() * (paquetOrdre.length - 1));
		paquet.push(paquetOrdre[index]);
		paquetOrdre.splice(index, 1);
	}

}

function distribution(argument) {

	for (var i = 13 - 1; i >= 0; i--) {
		document.getElementsByClassName("td-main")[i].innerHTML = "<a ondblclick = cracher(this) class = a-main>" + paquet[i].unicode + "</a>";
		document.getElementsByClassName("td-main")[i].title = paquet[i].nom();
	}
	for (var i = 13 * 4 - 1; i >= 0; i--) {
		piocherMur(false);
	}

}

function cracher(tuile) {

	tuilesMain = document.getElementsByClassName("a-main");
	index = Array.prototype.indexOf.call(tuilesMain, tuile);
	tuileCracher = paquet[index];
	tuileCracherForce = tuileCracher.force - 1;
	if (tuileCracher.famille == "fleurs") {
		document.getElementsByClassName("a-fleurs")[tuileCracherForce].innerHTML = tuileCracher.unicode;
		document.getElementsByClassName("a-fleurs")[tuileCracherForce].title = tuileCracher.nom();
		remplacer();
	} else if (tuileCracher.famille == "saisons") {
		document.getElementsByClassName("a-saisons")[tuileCracherForce].innerHTML = tuileCracher.unicode;
		document.getElementsByClassName("a-saisons")[tuileCracherForce].title = tuileCracher.nom();
		remplacer();
	} else {
		paquetCentre.push(tuileCracher);
		document.getElementsByClassName("td-centre")[compteCracher].innerHTML = "<a ondblclick = piocherCentre(this) class = a-centre id = a-crachee>" + tuileCracher.unicode + "</a>";
		document.getElementsByClassName("a-centre")[compteCracher].title = tuileCracher.nom();
		compteCracher++;
	}
	document.getElementsByClassName("a-main")[index].innerHTML = "";

}

function piocherCentre(tuile) {

	tuilesCentre = document.getElementsByClassName("a-centre");
	index = Array.prototype.indexOf.call(tuilesCentre, tuile);
	tuilePiocherCentre = paquetCentre[index];
	document.getElementById("td-pioche-main").innerHTML = "<a id = a-pioche-main>" + tuilePiocherCentre.unicode + "</a>";
	document.getElementById("a-pioche-main").title = tuilePiocherCentre.nom();
	document.getElementsByClassName("td-centre")[index].innerHTML = "<a class = a-centre></a>";

}

function piocherMur(afficherPioche) {

	tuilePiocherMur = paquet[144 - 1 - comptePiocherMur];
	if (comptePiocherMur < 12) {
		if (comptePiocherMur == 10) {
			document.getElementsByClassName("td-mur")[Math.floor(compte1PiocherMur / 2)].innerHTML = "<a ondblclick = piocherMur() class = a-mur id = a-bas-gauche>🀫</a>";
		} else if (comptePiocherMur % 2 == 0) {
			document.getElementsByClassName("td-mur")[Math.floor(compte1PiocherMur / 2)].innerHTML = "<a ondblclick = piocherMur() class = a-mur>🀫</a>";
		} else {
			document.getElementsByClassName("td-mur")[Math.floor(compte1PiocherMur / 2)].innerHTML = "";
		}
		compte1PiocherMur--;
	} else if (comptePiocherMur < 46) {
		if (bascule2PiocherMur) {
			if (compte2PiocherMur % 2 == 1) {
				document.getElementsByClassName("td-mur")[Math.floor(compte2PiocherMur / 2) - 2].innerHTML = "<a ondblclick = piocherMur() class = a-mur>🀫</a>";
			} else {
				document.getElementsByClassName("td-mur")[Math.floor(compte2PiocherMur / 2) - 2].innerHTML = "";
				compte2PiocherMur--;
				compte2PiocherMur--;
				bascule2PiocherMur = true;
			}
		} else {
			if (compte2PiocherMur % 2 == 1) {
				document.getElementsByClassName("td-mur")[Math.floor(compte2PiocherMur / 2)].innerHTML = "<a ondblclick = piocherMur() class = a-mur>🀫</a>";
			} else {
				document.getElementsByClassName("td-mur")[Math.floor(compte2PiocherMur / 2)].innerHTML = "";
				bascule2PiocherMur = true;
			}
		}
		compte2PiocherMur--;
	} else if (comptePiocherMur < 84) {
		if (comptePiocherMur == 82) {
			document.getElementsByClassName("td-mur")[Math.floor(compte3PiocherMur / 2)].innerHTML = "<a ondblclick = piocherMur() class = a-mur id = a-haut-droite>🀫</a>";
		} else if (comptePiocherMur % 2 == 0) {
			document.getElementsByClassName("td-mur")[Math.floor(compte3PiocherMur / 2)].innerHTML = "<a ondblclick = piocherMur() class = a-mur>🀫</a>";
		} else {
			document.getElementsByClassName("td-mur")[Math.floor(compte3PiocherMur / 2)].innerHTML = "";
		}
		compte3PiocherMur++;
	} else if (comptePiocherMur < 118) {
		if (bascule4PiocherMur) {
			if (compte4PiocherMur % 2 == 0) {
				document.getElementsByClassName("td-mur")[Math.floor(compte4PiocherMur / 2) + 2].innerHTML = "<a ondblclick = piocherMur() class = a-mur>🀫</a>";
			} else {
				document.getElementsByClassName("td-mur")[Math.floor(compte4PiocherMur / 2) + 2].innerHTML = "";
				compte4PiocherMur++;
				compte4PiocherMur++;
				bascule4PiocherMur = true;
			}
		} else {
			if (compte4PiocherMur % 2 == 1) {
				document.getElementsByClassName("td-mur")[Math.floor(compte4PiocherMur / 2)].innerHTML = "<a ondblclick = piocherMur() class = a-mur>🀫</a>";
			} else {
				document.getElementsByClassName("td-mur")[Math.floor(compte4PiocherMur / 2)].innerHTML = "";
				bascule4PiocherMur = true;
			}
		}
		compte4PiocherMur++;
	} else {
		if (comptePiocherMur % 2 == 0) {
			document.getElementsByClassName("td-mur")[Math.floor(compte5PiocherMur / 2)].innerHTML = "<a ondblclick = piocherMur() class = a-mur>🀫</a>";
		} else {
			document.getElementsByClassName("td-mur")[Math.floor(compte5PiocherMur / 2)].innerHTML = "";
		}
		compte5PiocherMur--;
	}
	if (afficherPioche) {
		document.getElementById("td-pioche-main").innerHTML = "<a id = a-pioche-main>" + tuilePiocherMur.unicode + "</a>";
		document.getElementById("a-pioche-main").title = tuilePiocherMur.nom();
	}
	comptePiocherMur++;

}

function joueurSuivant() {

	// enregistrer les changements
	// passer la main
	// verrouillage de la tuile crachée au tour précédent

	// tuileCrachee = document.getElementsByClassName("a-centre")[document.getElementsByClassName("a-centre").length].innerHTML;

}

function remplacer() {

	tuileRemplacer = paquet[144 - 1 - compteRemplacer];
	document.getElementsByClassName("div-tres-haut")[compteRemplacer].innerHTML = "";
	document.getElementById("td-pioche-main").innerHTML = "<a id = a-pioche-main>" + tuileRemplacer.unicode + "</a>";
	document.getElementById("a-pioche-main").title = tuileRemplacer.nom();
	compteRemplacer--;

}

function chow() {

	annonce = "Chow";
	verouillageBoutons();

}

function estChow(tuile1, tuile2, tuile3) {

	if (tuile1.famille == tuile2.famille && tuile1.famille == tuile3.famille) {
		if (tuile1.force - tuile2.force == 1 && tuile2.force - tuile3.force == 1) {
			return true;
		}
		if (tuile1.force - tuile2.force == -1 && tuile2.force - tuile3.force == -1) {
			return true;
		}
		if (tuile1.force - tuile3.force == 1 && tuile2.force - tuile1.force == 1) {
			return true;
		}
		if (tuile1.force - tuile3.force == -1 && tuile2.force - tuile1.force == -1) {
			return true;
		}
	}
	return false;

}

function pung(interne) {

	if (interne) {
		annonce = "Pung interne";
	} else {
		annonce = "Pung";
	}
	verouillageBoutons();

}

function estPung(tuile1, tuile2, tuile3) {

	if (tuile1.unicode == tuile2.unicode && tuile1.unicode == tuile3.unicode) {
		return true;
	}
	return false;

}

function kong(interne) {

	if (interne) {
		annonce = "Kong interne";
	} else {
		annonce = "Kong";
	}
	verouillageBoutons();

}

function estKong(tuile1, tuile2, tuile3, tuile4) {}

function mahjong() {

	annonce = "Mah-jong";
	verouillageBoutons();
	if (combinaisons == 4) {
	} else {
		alert("Il vous reste " + (4 - combinaisons) + " combinaisons à faire.");
	}

}

function paire() {

	annonce = "Paire";
	verouillageBoutons();

}

function estPaire(tuile1, tuile2) {

	if (tuile1.unicode == tuile2.unicode) {
		return true;
	}
	return false;

}

function valider() {

	tuilesSelectionnees = document.getElementsByClassName("a-selectionnees");
	if (tuilesSelectionnees.length == 0) {
		alert("Veuillez sélectionner des tuiles.");
	} else {
		tuiles = [];
		for (var i = tuilesSelectionnees.length - 1; i >= 0; i--) {
			tuileUnicode = new TuileUnicode(tuilesSelectionnees[i].innerText);
			tuiles.push(tuileUnicode.tuile());
		}
		if (annonce == "Chow") {
			if (estChow(tuiles[0], tuiles[1], tuiles[2])) {
				combinaisons++;
				alert("Bravo, un chow !");
			} else {
				alert("Désolé, vous n'avez pas un chow.");
			}
		} else if (annonce == "Pung") {
			if (estPung(tuiles[0], tuiles[1], tuiles[2])) {
				combinaisons++;
				alert("Bravo, un pung !");
			} else {
				alert("Désolé, vous n'avez pas un pung.");
			}
		} else if (annonce == "Pung interne") {
			if (estPung(tuiles[0], tuiles[1], tuiles[2])) {
				combinaisons++;
				alert("Bravo, un pung interne !");
			} else {
				alert("Désolé, vous n'avez pas un pung interne.");
			}
		} else if (annonce == "Kong") {
			if (estKong(tuiles[0], tuiles[1], tuiles[2], tuiles[3])) {
				combinaisons++;
				alert("Bravo, un kong !"); 
			} else {
				alert("Désolé, vous n'avez pas un kong.");
			}
		} else if (annonce == "Kong interne") {
			if (estKong(tuiles[0], tuiles[1], tuiles[2], tuiles[3])) {
				combinaisons++;
				alert("Bravo, un kong interne !"); 
			} else {
				alert("Désolé, vous n'avez pas un kong interne.");
			}
		} else if (annonce == "Mah-jong") {
			if (estMahjong(tuiles[0], tuiles[1])) {
				combinaisons++;
				alert("Bravo, un mah-jong !"); 
			} else {
				alert("Désolé, vous n'avez pas un mah-jong");
			}
		} else if (annonce == "Paire") {
			if (estPaire(tuiles[0], tuiles[1])) {
				combinaisons++;
				alert("Bravo, une paire !"); 
			} else {
				alert("Désolé, vous n'avez pas une paire");
			}
		}
	}

}

function verouillageBoutons() {

	if (basculeVerouillageBoutons) {
		if (annonce != "Chow") {
			document.getElementsByClassName("button-annonces")[0].style.opacity = 0.5;
		}
		if (annonce != "Pung") {
			document.getElementsByClassName("button-annonces")[1].style.opacity = 0.5;
		}
		if (annonce != "Pung interne") {
			document.getElementsByClassName("button-annonces")[2].style.opacity = 0.5;
		}
		if (annonce != "Kong") {
			document.getElementsByClassName("button-annonces")[3].style.opacity = 0.5;
		}
		if (annonce != "Kong interne") {
			document.getElementsByClassName("button-annonces")[4].style.opacity = 0.5;
		}
		if (annonce != "Mah-jong") {
			document.getElementsByClassName("button-annonces")[5].style.opacity = 0.5;
		}
		if (annonce != "Paire") {
			document.getElementsByClassName("button-annonces")[6].style.opacity = 0.5;
		}
		basculeVerouillageBoutons = false;
	} else {
		if (annonce != "Chow") {
			document.getElementsByClassName("button-annonces")[0].style.opacity = 1;
		}
		if (annonce != "Pung") {
			document.getElementsByClassName("button-annonces")[1].style.opacity = 1;
		}
		if (annonce != "Pung interne") {
			document.getElementsByClassName("button-annonces")[2].style.opacity = 1;
		}
		if (annonce != "Kong") {
			document.getElementsByClassName("button-annonces")[3].style.opacity = 1;
		}
		if (annonce != "Kong interne") {
			document.getElementsByClassName("button-annonces")[4].style.opacity = 1;
		}
		if (annonce != "Mah-jong") {
			document.getElementsByClassName("button-annonces")[5].style.opacity = 1;
		}
		if (annonce != "Paire") {
			document.getElementsByClassName("button-annonces")[6].style.opacity = 1;
		}
		basculeVerouillageBoutons = true;
	}

}

function selectionner() {

	if (basculeSelectionner) {
		document.getElementById("button-selectionner").style.opacity = 0.5;
		basculeSelectionner = false;
	} else {
		document.getElementById("button-selectionner").style.opacity = 1;
		basculeSelectionner = true;
	}
	tuilesMain = document.getElementsByClassName("a-main");
	piocheMain = document.getElementById("a-pioche-main");
	dernierCrache = document.getElementById("a-crachee");
	tuilesArray = Array.from(tuilesMain);
	if (piocheMain != null) {
		tuilesArray.push(piocheMain);
	}
	if (dernierCrache != null) {
		tuilesArray.push(dernierCrache);
	}
	tuilesArray.forEach(
		(tuile) => {
			tuile.addEventListener(
				"click",
				() => {
					tuile.classList.toggle("a-selectionnees");
				}
			);
		}
	);

}


// ================================================================================================================= //
//                                                                                                                   //
//                                                     Mah-jong                                                      //
//                                                                                                                   //
// ================================================================================================================= //