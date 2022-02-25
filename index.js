;(function () {
	const email = document.querySelector('#email')
	const field = document.querySelector('.field')
	const checkReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

	function handleTextChange(e) {
		const isPass = checkReg.test(e.target.value)
		field.classList.toggle('ok', isPass)
	}

	email.addEventListener('input', handleTextChange)
})()
