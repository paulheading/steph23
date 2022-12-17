import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CustomEase } from 'gsap/dist/CustomEase'
import { CustomWiggle } from 'gsap/dist/CustomWiggle'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase)
gsap.registerPlugin(CustomWiggle)

const studio = {}

studio.ease = CustomWiggle.create('myWiggle', { wiggles: 5, type: 'easeOut' })

studio.trigger = ({ target, trigger, start }) => ({
  start: `top ${start ? start : 'center'}`,
  trigger: trigger ? trigger : target,
  toggleActions: 'restart',
})

studio.config = {
  ease: studio.ease,
  duration: 0.8,
  rotation: 4,
}

studio.wiggle = (value) => {
  const { trigger, config } = studio
  const { target } = value

  gsap.to(target, {
    scrollTrigger: trigger(value),
    ...config,
  })
}

export { studio }
