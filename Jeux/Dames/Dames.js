// ================================================================================================================= //
//                                                                                                                   //
//                                                       Dames                                                       //
//                                                                                                                   //
// ================================================================================================================= //

function selectionner(cellule) {
	console.log(cellule.classList);

	if (cellule.style.backgroundColor = "#ff00ff") {
		if (cellule.classList[0] == "td-blanc") {
			cellule.style.backgroundColor = "red";
		} else {
	// 		cellule.style.backgroundColor = "green";
		}
	} else {
		cellule.style.backgroundColor = "#ff00ff";
	}
	// cellule.classList.toggle('yellow');
	// const rowIndex = Array.from(cellule.parentElement.children).indexOf(cellule);
	// if (rowIndex > 0) {
	// 	const rowAbove = cellule.parentElement.parentElement.previousElementSibling;
	// 	if (rowAbove) {
	// 		const squareAbove = rowAbove.children[rowIndex];
	// 		squareAbove.classList.toggle('yellow');
	// 	}
	// }

}

// ================================================================================================================= //
//                                                                                                                   //
//                                                       Dames                                                       //
//                                                                                                                   //
// ================================================================================================================= //
