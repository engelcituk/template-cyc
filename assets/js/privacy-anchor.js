document.querySelectorAll('.services-list a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault() 

        const headerHeight = document.getElementById('header').offsetHeight 
        const additionalOffset = 1 * parseFloat(getComputedStyle(document.documentElement).fontSize)
        const targetId = this.getAttribute('href') 
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
            const targetPosition = targetElement.offsetTop 
            const offsetPosition = targetPosition - headerHeight - additionalOffset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' 
            })
        }
            document.querySelectorAll('.services-list a').forEach(link => {
            link.classList.remove('active')
        })
        this.classList.add('active')
    })
})