export const createImageSrc = (string = '') => ({ src: string + '.webp', alt: string.replace(/-/g, ' ') })

export function attachVariant(variant, styles) {
  switch (variant) {
    case 'cream': return styles.cream
    case 'green': return styles.green
    case 'red': return styles.red
    case 'sky': return styles.sky
    case 'yellow': return styles.yellow
    default: return ''
  }
}