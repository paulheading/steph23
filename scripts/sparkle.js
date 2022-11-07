import gsap from 'gsap'

const sparkle = {
  tl: gsap.timeline(),
  target: '#topSpark',
}

sparkle.play = function () {
  const { tl, target } = sparkle
  tl.to(target, { duration: 0.4, opacity: 1, maskSize: 600 }).to(target, { duration: 0.8, opacity: 0.3, maskSize: 300, repeat: -1, yoyo: true })
}

export { sparkle }
