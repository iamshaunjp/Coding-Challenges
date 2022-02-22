;(function () {
	const triggerButton = document.querySelector('.triggerIcon')

	function handleMenuStateChange() {
		const lines = Array.from(document.querySelectorAll('.line'))
		const slideMenu = document.querySelector('.slideMenu')

		lines.forEach((line) => line.classList.toggle('active'))
		slideMenu.classList.toggle('active')
	}

	triggerButton.addEventListener('click', handleMenuStateChange)
})()
