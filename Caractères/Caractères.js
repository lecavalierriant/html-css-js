
copier = (caractère) => {

	navigator.clipboard.writeText(caractère).then(
		() => {alert("Caractère « " + caractère + " » copié !");}
	);

};

document.addEventListener(

	"DOMContentLoaded",
	function () {
		if (document.title == "Alt +") {
			éléments = document.querySelectorAll("td");
		} else if (document.title == "Entités HTML") {
			éléments = document.querySelectorAll("tr");
		}
		total = éléments.length;
		occurrences = {};
		classes = 0;
		éléments.forEach(
			function (élément) {
				classe = élément.getAttribute("class");
				if (classe) {
					if (!occurrences[classe]) {
						occurrences[classe] = 1;
					} else {
						occurrences[classe]++;
					}
					classes++;
				}
			}
		);
		statistiques = document.getElementById("table-statistiques");
		nouvelleLigneStatistiques("Défaut", total - classes, total);
		for (classe in occurrences) {
			nouvelleLigneStatistiques(classe, occurrences[classe], total);
		}
		nouvelleLigneStatistiques("Total", total, total);
	}

);

function nouvelleLigneStatistiques(classe, occurrences, total) {

	pourcentage = (occurrences / total) * 100;
	ligne = statistiques.insertRow();
	ligne.insertCell(0).textContent = classe;
	ligne.insertCell(1).textContent = occurrences;
	ligne.insertCell(2).textContent = pourcentage.toFixed(1).replace(".", ",") + " %";

;

}