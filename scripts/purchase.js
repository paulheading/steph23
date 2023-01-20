import gsap from 'gsap'
import { studio, query } from 'scripts'

const purchase = {}

purchase.wiggle = (value) => {
  const { config } = studio
  const { target } = value
  const { desktop } = query

  gsap.to(target, {
    ...config,
  })
}

export { purchase }
