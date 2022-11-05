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

export const getCSS = (value) => getComputedStyle(document.documentElement).getPropertyValue('--' + value)

export function attachVariant(variant, styles) {
  switch (variant) {
    case 'cream':
      return styles.cream
    case 'green':
      return styles.green
    case 'red':
      return styles.red
    case 'sky':
      return styles.sky
    case 'yellow':
      return styles.yellow
    default:
      return ''
  }
}

export function isRouteActive(href, route) {
  if (href === route) return true
  const parent = {
    route: route.split('/')[1],
    href: href.split('/')[1],
  }
  if (parent.href === parent.route) return true
  return false
}

export const imageProps = {
  placeholder: 'blur',
  height: 448,
  width: 320,
  alt: '',
}

export const contact = {
  input: (title = '', type = 'text') => ({ type, name: title, id: title }),
  row: (data, error, errorMessage = '') => {
    const { name, title, rules } = data
    return {
      errorMessage,
      htmlFor: name,
      label: title,
      error,
      rules,
    }
  },
}
