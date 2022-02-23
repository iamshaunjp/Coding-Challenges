;(function () {
	const triggerButton = document.querySelector('.triggerIcon')
	const slideOverlay = document.querySelector('.slideOverlay')

	function handleMenuStateChange() {
		// idea from wassim.dev
		const menu = document.querySelector('.menu')
		menu.classList.toggle('active')
	}

	triggerButton.addEventListener('click', handleMenuStateChange)
	slideOverlay.addEventListener('mouseover', handleMenuStateChange)
})()
