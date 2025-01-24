const toggleButton = document.getElementById('theme-toggle')
const toggleTheme = ( mode ) => {
    const logo = document.getElementById('logo') // Referencia al logo

    if (mode === 'dark' || (mode === undefined && !document.body.classList.contains('dark-theme'))) {
        document.body.classList.add('dark-theme');
        toggleButton.querySelector('i').classList.replace('bi-moon', 'bi-sun');
        if (logo) {
            logo.src = logo.getAttribute('data-dark-logo');
        }
    } else if (mode === 'light' || (mode === undefined && document.body.classList.contains('dark-theme'))) {
        document.body.classList.remove('dark-theme');
        toggleButton.querySelector('i').classList.replace('bi-sun', 'bi-moon');

        if (logo) {
            logo.src = logo.getAttribute('data-light-logo');
        }
    }
}

	const detectSystemTheme = () => {
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