import gsap from 'gsap'

const testimonials = {}

testimonials.target = '#testimonial'

testimonials.clear = () => {
  const { target } = testimonials
  gsap.set(target, { opacity: 1 })
}

testimonials.animate = (start, complete, animate) => {
  const { target } = testimonials
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

testimonials.animateNext = (start, complete) => {
  const { animate } = testimonials
  animate(start, complete, { x: 60 })
}

testimonials.animatePrev = (start, complete) => {
  const { animate } = testimonials
  animate(start, complete, { x: -60 })
}

export { testimonials }
