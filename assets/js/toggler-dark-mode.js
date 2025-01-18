const toggleButton = document.getElementById('theme-toggle')
	function toggleTheme(mode) {
		const lightElements = document.querySelectorAll('.light-background')
		const darkElements = document.querySelectorAll('.dark-background')

		if (mode === 'dark' || (lightElements.length > 0 && mode === undefined)) {

			lightElements.forEach(element => {
				element.classList.replace('light-background', 'dark-background')
			})
			toggleButton.querySelector('i').classList.replace('bi-moon', 'bi-sun')
		} else if (mode === 'light' || (darkElements.length > 0 && mode === undefined)) {

			darkElements.forEach(element => {
				element.classList.replace('dark-background', 'light-background')
			})
			toggleButton.querySelector('i').classList.replace('bi-sun', 'bi-moon')
		}
	}
	function detectSystemTheme() {
		const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

		if (isDarkMode) {
			toggleTheme('dark')
		} else {
			toggleTheme('light')
		}
	}
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
		const newColorScheme = e.matches ? 'dark' : 'light'
		toggleTheme(newColorScheme)
	})
	toggleButton.addEventListener('click', () => {
		toggleTheme()
	})
	detectSystemTheme()