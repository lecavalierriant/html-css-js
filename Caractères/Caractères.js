
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
		occurences = {};
		nombreClasses = 0;
		éléments.forEach(
			function (élément) {
				classe = élément.getAttribute("class");
				if (classe) {
					if (!occurences[classe]) {occurences[classe] = 1;
				} else {
					occurences[classe]++;}
					nombreClasses++;
				}
			}
		);
		statistiques = document.getElementById("statistiques");

		// occurence = total - occurences.length();
		occurence = total - nombreClasses;
		pourcentage = (occurence / total) * 100;
		ligne = statistiques.insertRow();
		ligne.insertCell(0).textContent = "Défaut";
		ligne.insertCell(1).textContent = occurence;
		ligne.insertCell(2).textContent = pourcentage.toFixed(1) + "%";

		for (classe in occurences) {
			occurence = occurences[classe];
			pourcentage = (occurence / total) * 100;
			ligne = statistiques.insertRow();
			ligne.insertCell(0).textContent = classe;
			ligne.insertCell(1).textContent = occurence;
			ligne.insertCell(2).textContent = pourcentage.toFixed(1) + "%";
		}

		ligne = statistiques.insertRow();
		ligne.insertCell(0).textContent = "Total";
		ligne.insertCell(1).textContent = total;
		ligne.insertCell(2).textContent = "100%";

	}
);