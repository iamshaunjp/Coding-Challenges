;(function () {
	const triggerButton = document.querySelector('.triggerIcon')
	const slideOverlay = document.querySelector('.slideOverlay')

	function handleMenuStateChange() {
		const lines = Array.from(document.querySelectorAll('.line'))
		const slideMenu = document.querySelector('.slideMenu')

		lines.forEach((line) => line.classList.toggle('active'))
		slideMenu.classList.toggle('active')
		slideOverlay.classList.toggle('active')
	}

	triggerButton.addEventListener('click', handleMenuStateChange)
	slideOverlay.addEventListener('mouseover', handleMenuStateChange)

	document.addEventListener('click', (e) => {
		console.log(e.target)
	})
})()
