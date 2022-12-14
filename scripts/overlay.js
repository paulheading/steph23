import gsap from 'gsap'

const overlay = {
  tl: gsap.timeline({ defaults: { ease: 'circ.out', duration: 0.2 } }),
  target: '#overlay',
}

overlay.isOpen = function () {
  const { target } = overlay
  const value = gsap.getProperty(target, 'x')
  return value === 0
}

overlay.close = function () {
  const { tl, target } = overlay
  tl.to('body', { clearProps: 'overflow' }).to(target, { x: '100%' })
}

overlay.open = function () {
  const { tl, target } = overlay
  tl.to('body', { overflow: 'hidden' }).to(target, { x: '0%' })
}

overlay.toggle = function () {
  const { isOpen, open, close } = overlay
  return isOpen() ? close() : open()
}

export { overlay }
