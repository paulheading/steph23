import styles from 'styles/components/wrap/image.module.scss'
import { attachVariant } from 'scripts'
import { imageProps } from 'scripts'

export function ImageWrap({ children, width = imageProps.width, className, variant }) {
  const customClass = className ? className : ''
  const containerClasses = `${styles.container} ${attachVariant(variant, styles)} ${customClass}`

  return (
    <div className={containerClasses} style={{ width }}>
      {children}
    </div>
  )
}
