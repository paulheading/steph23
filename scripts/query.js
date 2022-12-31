import gsap from 'gsap'

const query = {}

query.setup = gsap.matchMedia()

query.desktop = {
  up: (code) => {
    const { setup } = query
    setup.add('(min-width: 1025px)', code)
  },
  down: (code) => {
    const { setup } = query
    setup.add('(max-width: 1024px)', code)
  },
}

export { query }
