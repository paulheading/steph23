import styles from 'styles/components/wrap/image.module.scss'
import { attachVariant } from 'scripts'

export function ImageWrap({ children, width = 320, className, variant, border = true }) {
  function containerClasses() {
    let result = `${attachVariant(variant, styles)}`
    if (border) result += ` ${styles.container_border}`
    else result += ` ${styles.container}`
    if (className) result += ` ${className}`
    return result
  }

  return (
    <div className={containerClasses()} style={{ width }}>
      {children}
    </div>
  )
}
