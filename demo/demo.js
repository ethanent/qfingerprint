const resultDisplay = document.querySelector('p#result')

qfingerprint.calculate()
	.then((result) => {
		resultDisplay.textContent = result
	})
	.catch((er) => {
		resultDisplay.textContent = "Error: " + er.toString()
	})
