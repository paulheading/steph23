export function attachVariant(variant, styles) {
  switch (variant) {
    case 'red':
      return styles.red
    case 'yellow':
      return styles.yellow
    case 'cream':
      return styles.cream
    case 'sky':
      return styles.sky
    default:
      return styles.green
  }
}
