;(function () {
	const email = document.querySelector('#email')
	const tick = document.querySelector('.tick')
	const checkReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

	function handleTextChange(e) {
		const isPass = checkReg.test(e.target.value)

		email.classList.toggle('ok', isPass)
		tick.classList.toggle('ok', isPass)
	}

	email.addEventListener('input', handleTextChange)
})()
