import gsap from 'gsap'

const page = {
  reset: (target) => gsap.set(target, { clearProps: 'overflow' }),
}

export { page }
