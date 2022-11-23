// dom elements
const buttons = document.querySelectorAll('button')
const textarea = document.querySelector('textarea')
const output = document.querySelector('.output')

// flavours
const flavours = {
  ninja: ['dojo', 'shogun', 'shinobi', 'samuri', 'shuriken'],
  pokemon: ['pika', 'pokeball', 'pokedex', 'evolve', 'ash', 'gym'],
  space: ['universe', 'galaxy', 'telescope', 'comet', 'stars'],
}

// functions
const flavourize = (inputText, flavour) => {
  const textArray = inputText.split(' ')

  for (let i = 0; i < textArray.length; i++) {

    if (i % 3 === 0) {
      const random = Math.floor(Math.random() * flavour.length)
      textArray[i] = flavour[random]
    }

  }

  return textArray.join(' ')
}

const updateOutput = (text) => {
  output.textContent = text
}

// event listener
buttons.forEach(b => {
  b.addEventListener('click', (e) => {

    e.preventDefault()

    if (textarea.value) {
      const f = e.target.dataset.flavour
      const text = flavourize(textarea.value, flavours[f])
      updateOutput(text)
    }

  })
})

