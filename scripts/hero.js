import gsap from 'gsap'

const hero = {
  sparkle: (target) => {
    const tl = gsap.timeline()
    tl.to(target, { duration: 0.4, opacity: 1, maskSize: 600 }).to(target, { duration: 0.8, opacity: 0.3, maskSize: 300, repeat: -1, yoyo: true })
  },
}

export { hero }
