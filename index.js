const formInput = document.querySelector('form input')
const span = document.querySelector('form span')

// Validate
const emailValidation= (email) => {
  // https://www.w3resource.com/javascript/form/email-validation.php
  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  return emailRegex.test(email)
}

// UI
const handleUi = (matched) => {
  console.log(matched);
  if(matched) {
    span.classList.add('matched')
    formInput.classList.add('matched')
  } else {
    span.classList.remove('matched')
    formInput.classList.remove('matched')
  }
}

// Event
formInput.addEventListener('input', () => {
  const email = formInput.value;
  const matched = emailValidation(email)
  handleUi(matched)
})

// I just wanna say, big thank to you, I've learned a lot from you.
