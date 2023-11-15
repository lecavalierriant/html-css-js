// ================================================================================================================= //
//                                                                                                                   //
//                                                        Poker                                                      //
//                                                                                                                   //
// ================================================================================================================= //


piques = ["🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩", "🂪", "🂫", "🂬", "🂭", "🂮"];
coeurs = ["🂱", "🂲", "🂳", "🂴", "🂵", "🂶", "🂷", "🂸", "🂹", "🂺", "🂻", "🂼", "🂽", "🂾"];
carreaux = ["🃁", "🃂", "🃃", "🃄", "🃅", "🃆", "🃇", "🃈", "🃉", "🃊", "🃋", "🃌", "🃍", "🃎"];
trefles = ["🃑", "🃒", "🃓", "🃔", "🃕", "🃖", "🃗", "🃘", "🃙", "🃚", "🃛", "🃜", "🃝", "🃞"];
// 🂠

paquet = [];
// nombre de joueurs * 2 => premières cartes
// reste (partant de max)

class Carte {

	constructor(force, famille) {

		this.force = force;
		this.famille = famille;
		if (this.famille == "pique") {
			this.unicode = piques[this.force - 1];
		} else if (this.famille == "cœur") {
			this.unicode = coeurs[this.force - 1];
		} else if (this.famille == "carreau") {
			this.unicode = carreaux[this.force - 1];
		} else if (this.famille == "trèfle") {
			this.unicode = trefles[this.force - 1];
		}

	}

	nom() {

		if (this.force == 1) {
			return "As de " + this.famille;
		} else if (this.force == 11) {
			return "Valet de " + this.famille;
		} else if (this.force == 12) {
			return "Dame de " + this.famille;
		} else if (this.force == 13) {
			return "Roi de " + this.famille;
		} else {
			return this.force + " de " + this.famille;
		}

	}

}

class CarteUnicode {

	constructor(unicode) {

		for (var i = 13 - 1; i >= 0; i--) {
			if (unicode == piques[i]) {
				this.famille = "pique";
				this.force = i;
				return;
			}
		}
		for (var i = 13 - 1; i >= 0; i--) {
			if (unicode == coeurs[i]) {
				this.famille = "cœur";
				this.force = i;
				return;
			}
		}
		for (var i = 13 - 1; i >= 0; i--) {
			if (unicode == carreaux[i]) {
				this.famille = "carreau";
				this.force = i;
				return;
			}
		}
		for (var i = 13 - 1; i >= 0; i--) {
			if (unicode == trefles[i]) {
				this.famille = "trèfle";
				this.force = i;
				return;
			}
		}

	}

	carte() {

		carte = new Carte(this.force, this.famille);
		return tuile;

	}

}

function nouveauPaquet() {

	paquetOrdre = [];
	for (var i = 13; i >= 1; i--) {
		carte = new Carte(i, "pique");
		paquetOrdre.push(carte);
	}
	for (var i = 13; i >= 1; i--) {
		carte = new Carte(i, "cœur");
		paquetOrdre.push(carte);
	}
	for (var i = 13; i >= 1; i--) {
		carte = new Carte(i, "carreau");
		paquetOrdre.push(carte);
	}
	for (var i = 13; i >= 1; i--) {
		carte = new Carte(i, "trèfle");
		paquetOrdre.push(carte);
	}
	paquet = [];
	for (var i = paquetOrdre.length - 1; i >= 0; i--) {
		index = Math.floor(Math.random() * (paquetOrdre.length - 1));
		paquet.push(paquetOrdre[index]);
		paquetOrdre.splice(index, 1);
	}

}


// ================================================================================================================= //
//                                                                                                                   //
//                                                        Poker                                                      //
//                                                                                                                   //
// ================================================================================================================= //