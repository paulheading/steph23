import gsap from 'gsap'

const testimonials = {}

testimonials.clear = (target) => gsap.set(target, { opacity: 1 })

testimonials.animate = (target, start, complete, animate) => {
  const tl = gsap.timeline()
  const reset = { x: 0 }

  tl.to(target, {
    ease: 'back.in(3)',
    duration: 0.6,
    opacity: 0,
    ...animate,
    onStart: () => start && start(),
    onComplete: () => complete && complete(),
  })
    .set(target, { ...reset, delay: 0.2 })
    .to(target, { opacity: 1, duration: 0.6 })
}

testimonials.animateNext = (target, start, complete) => {
  const { animate } = testimonials
  animate(target, start, complete, { x: 60 })
}

testimonials.animatePrev = (target, start, complete) => {
  const { animate } = testimonials
  animate(target, start, complete, { x: -60 })
}

export { testimonials }
