import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { query } from 'scripts'

gsap.registerPlugin(ScrollTrigger)

const intro = {
  reset: (target) => gsap.set(target, { x: -100, opacity: 0 }),
  clear: (target) => gsap.set(target, { clearProps: 'all' }),
  duration: 1,
  stagger: 1,
}

intro.trigger = (trigger, scrub = true) => ({
  end: 'top center',
  trigger,
  scrub,
})

intro.scroll = (target) => {
  const { reset, clear, trigger, duration, stagger } = intro
  const { desktop } = query

  reset(target)
  gsap.to(target, {
    scrollTrigger: trigger(target),
    opacity: 1,
    duration,
    stagger,
    x: 0,
  })
}

export { intro }
