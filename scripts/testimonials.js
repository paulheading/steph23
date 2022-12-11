import gsap from 'gsap'

const testimonials = {}

testimonials.animate = (start, complete, a) => {
  const tl = gsap.timeline()
  const testimonial = '#testimonial'
  const reset = { x: 0 }

  tl.to(testimonial, {
    ease: 'back.in(3)',
    duration: 0.6,
    opacity: 0,
    ...a,
    onStart: () => start && start(),
    onComplete: () => complete && complete(),
  })
    .set(testimonial, { ...reset, delay: 0.2 })
    .to(testimonial, { opacity: 1, duration: 0.6 })
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
