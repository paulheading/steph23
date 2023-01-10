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

export function isRouteActive(href, route, parent = false) {
  if (href === route) return true
  if (parent) {
    const padre = {
      route: route.split('/')[1],
      href: href.split('/')[1],
    }
    if (padre.href === padre.route) return true
  }
  return false
}

export const imageProps = {
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

export * from 'scripts/overlay'
export * from 'scripts/hero'
export * from 'scripts/intro'
export * from 'scripts/studio'
export * from 'scripts/testimonials'
export * from 'scripts/page'
export * from 'scripts/purchase'
export * from 'scripts/query'
export * from 'scripts/query2'
