/*===================================================================================================================*/
/*                                                                                                                   */
/*                                                       Dames                                                       */
/*                                                                                                                   */
/*===================================================================================================================*/

function toggleYellow(element) {
	element.classList.toggle('yellow');
	const rowIndex = Array.from(element.parentElement.children).indexOf(element);
	if (rowIndex > 0) {
		const rowAbove = element.parentElement.parentElement.previousElementSibling;
		if (rowAbove) {
			const squareAbove = rowAbove.children[rowIndex];
			squareAbove.classList.toggle('yellow');
		}
	}
}

/*===================================================================================================================*/
/*                                                                                                                   */
/*                                                       Dames                                                       */
/*                                                                                                                   */
/*===================================================================================================================*/