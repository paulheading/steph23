import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CustomEase } from 'gsap/dist/CustomEase'
import { CustomWiggle } from 'gsap/dist/CustomWiggle'
import { query } from 'scripts'

gsap.registerPlugin(ScrollTrigger, CustomEase, CustomWiggle)

const studio = {}

studio.ease = CustomWiggle.create('myWiggle', { wiggles: 5, type: 'easeOut' })

studio.trigger = ({ target, trigger, start, toggleActions = 'restart none restart' }) => ({
  start: `top ${start ? start : 'center'}`,
  trigger: trigger ? trigger : target,
  toggleActions,
})

studio.config = {
  ease: studio.ease,
  duration: 0.8,
  rotation: 4,
}

studio.wiggle = (value) => {
  const { trigger, config } = studio
  const { target } = value
  const { desktop } = query

  desktop.up(() => {
    gsap.to(target, {
      scrollTrigger: trigger(value),
      ...config,
    })
  })
}

export { studio }
