import styles from 'styles/components/wrap/image.module.scss'
import { attachVariant } from 'scripts'

export function ImageWrap({ children, width = 320, className, variant }) {
  const customClass = className ? className : ''
  const containerClasses = `${styles.container} ${attachVariant(variant, styles)} ${customClass}`

  return (
    <div className={containerClasses} style={{ width }}>
      {children}
    </div>
  )
}
