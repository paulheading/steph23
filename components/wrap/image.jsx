import styles from 'styles/components/wrap/image.module.scss'
import { attachVariant } from 'scripts'

export function ImageWrap({ id, children, width = 320, className, variant, border = true }) {
  function containerClasses() {
    let result = `${attachVariant(variant, styles)}`
    if (border) result += ` ${styles.container_border}`
    else result += ` ${styles.container}`
    if (className) result += ` ${className}`
    return result
  }

  const customID = { id: id ? id : null }

  return (
    <div {...customID} className={containerClasses()} style={{ width }}>
      {children}
    </div>
  )
}
