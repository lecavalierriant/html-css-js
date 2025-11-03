copier = (caractère) => {
	navigator.clipboard.writeText(caractère.innerHTML).then(
		() => {alert("Caractère « " + caractère.innerHTML + " » copié !");}
	);
};

document.addEventListener(
	"DOMContentLoaded",
	function () {
		if (document.title == "Alt +") {éléments = document.querySelectorAll("td");}
		else {éléments = document.querySelectorAll("tr");}
		total = éléments.length;
		occurrences = {};
		nombreDeClasses = 0;
		éléments.forEach(
			function (élément) {
				classe = élément.getAttribute("class");
				if (classe) {
					if (!occurrences[classe]) {occurrences[classe] = 1;} else {occurrences[classe]++;}
					nombreDeClasses++;
				}
			}
		);
		tableStatistiques = document.getElementById("table-statistiques");
		tableStatistiques.insertRow().insertCell(0).outerHTML = "<th>Classe</th><th>Occurrences</th><th>Proportion</th>";
		nouvelleLigneStatistiques("Défaut", total - nombreDeClasses, total);
		for (classe in occurrences) {nouvelleLigneStatistiques(classe, occurrences[classe], total);}
		nouvelleLigneStatistiques("Total", total, total);
	}
);

function nouvelleLigneStatistiques(classe, occurrences, total) {
	pourcentage = (occurrences / total) * 100;
	ligne = tableStatistiques.insertRow();
	ligne.insertCell(0).outerHTML = "<td class = '" + classe + "'>" + classe + "</td>";
	ligne.insertCell(1).textContent = occurrences;
	ligne.insertCell(2).textContent = pourcentage.toFixed(1).replace(".", ",") + " %";
}
