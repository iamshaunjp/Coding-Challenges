const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')

burger.addEventListener('click', (e) => {
  nav.classList.toggle('open')
  burger.classList.toggle('open')
})