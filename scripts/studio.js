import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CustomEase } from 'gsap/dist/CustomEase'
import { CustomWiggle } from 'gsap/dist/CustomWiggle'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase)
gsap.registerPlugin(CustomWiggle)

const studio = {}

studio.ease = CustomWiggle.create('myWiggle', { wiggles: 5, type: 'easeOut' })

studio.trigger = (target) => ({
  toggleActions: 'restart',
  start: 'top center',
  trigger: target,
})

studio.wiggle = (target) => {
  const { ease, trigger } = studio

  gsap.to(target, {
    scrollTrigger: trigger(target),
    duration: 0.8,
    rotation: 4,
    ease,
  })
}

export { studio }
