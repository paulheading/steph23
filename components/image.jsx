import NextImage from 'next/image'
import { attachVariant } from 'scripts'
import styles from 'styles/components/image.module.scss'

export function Image({ src, height = 448, width = 320, alt, className, variant }) {
  const hasClass = className ? className : ''
  const containerClasses = `${styles.container} ${attachVariant(variant, styles)} ${hasClass}`
  const props = {
    src: `/${src}.jpg`,
    height,
    width,
    alt,
  }
  return (
    <div className={containerClasses} style={{ height, width }}>
      <NextImage {...props} alt={alt} />
    </div>
  )
}