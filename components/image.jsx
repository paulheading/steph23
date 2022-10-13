import NextImage from 'next/image'
import { attachVariant } from 'scripts'
import styles from 'styles/components/image.module.scss'

export function Image({ src, height = 448, width = 320, alt, className, variant, border = false }) {
  const customClass = className ? className : ''
  const borderClass = border ? styles.border : ''
  const containerClasses = `${styles.container} ${attachVariant(variant, styles)} ${customClass} ${borderClass}`
  const props = {
    src: `/${src}`,
    height,
    width,
  }
  console.log('received props: ', props)
  return (
    <span className={containerClasses} style={{ height, width }}>
      <NextImage {...props} alt={alt} />
    </span>
  )
}
