export const createImageSrc = (string = '') => ({ src: string + '.webp', alt: string.replace(/-/g, ' ') })

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
