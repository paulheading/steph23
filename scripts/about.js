import gsap from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'
import { CustomWiggle } from 'gsap/dist/CustomWiggle'
import { studio } from 'scripts'

gsap.registerPlugin(CustomEase)
gsap.registerPlugin(CustomWiggle)

const about = {}

about.wiggle = (value) => {
  const { config } = studio
  const duration = config.duration * 0.5
  const { target } = value
  const tl = gsap.timeline()
  tl.to(target, { ...config, delay: duration }).to(target, { rotation: 0, duration })
}

export { about }
