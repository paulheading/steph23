import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const intro = {
  reset: (target) => gsap.set(target, { x: -100, opacity: 0 }),
  duration: 1,
  stagger: 1,
}

intro.trigger = (trigger, scrub = true) => ({
  end: 'top center',
  trigger,
  scrub,
})

intro.scroll = (target) => {
  const { trigger, duration, stagger } = intro

  gsap.to(target, {
    scrollTrigger: trigger(target),
    opacity: 1,
    duration,
    stagger,
    x: 0,
  })
}

export { intro }
