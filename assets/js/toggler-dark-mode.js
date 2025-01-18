const toggleButton = document.getElementById('theme-toggle')
	toggleButton.addEventListener('click', () => {
		const lightElements = document.querySelectorAll('.light-background')
		const darkElements = document.querySelectorAll('.dark-background')

		if (lightElements.length > 0) {

			lightElements.forEach(element => {
				element.classList.replace('light-background', 'dark-background')
			})

			toggleButton.querySelector('i').classList.replace('bi-moon', 'bi-sun')
		} else if (darkElements.length > 0) {

			darkElements.forEach(element => {
				element.classList.replace('dark-background', 'light-background')
			})

			toggleButton.querySelector('i').classList.replace('bi-sun', 'bi-moon')
		}
})