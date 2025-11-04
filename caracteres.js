copier = (caractère) => {
	navigator.clipboard.writeText(caractère.innerHTML).then(
		() => {alert("Caractère « " + caractère.innerHTML + " » copié !");}
	);
};

document.addEventListener(
	"DOMContentLoaded",
	function () {
		éléments = document.querySelectorAll("tr");
		total = éléments.length;
		occurrences = {};
		nombreDeClasses = 0;
		éléments.forEach(
			function (élément) {
				classe = élément.getAttribute("class");
				if (classe) {
					occurrences[classe] = (occurrences[classe] || 0) + 1;
					nombreDeClasses++;
				}
			}
		);
		statistiques.insertRow().insertCell(0).outerHTML = "<th>Classe</th><th>Occurrences</th><th>Proportion</th>";
		nouvelleLigneStatistiques("Défaut", total - nombreDeClasses, total);
		for (classe in occurrences) {nouvelleLigneStatistiques(classe, occurrences[classe], total);}
		nouvelleLigneStatistiques("Total", total, total);
		lettres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωАБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзиклмнопрстуфхцчшщъыьэюя";
		document.querySelectorAll(".aléatoire").forEach(function (aléatoire) {aléatoire.innerText = lettres[Math.floor(Math.random() * lettres.length)];})
	}
);

function nouvelleLigneStatistiques(classe, occurrences, total) {
	pourcentage = (occurrences / total) * 100;
	ligne = statistiques.insertRow();
	ligne.insertCell(0).outerHTML = "<td class = '" + classe + "'>" + classe + "</td>";
	ligne.insertCell(1).textContent = occurrences;
	ligne.insertCell(2).textContent = pourcentage.toFixed(1).replace(".", ",") + " %";
}
