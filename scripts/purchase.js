import gsap from 'gsap'
import { studio } from 'scripts'

const purchase = {}

purchase.wiggle = (value) => {
  const { config } = studio
  const { target } = value

  gsap.to(target, {
    ...config,
  })
}

export { purchase }
