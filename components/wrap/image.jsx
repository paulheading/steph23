import styles from 'styles/components/wrap/image.module.scss'
import { attachVariant } from 'scripts'
import { forwardRef } from 'react'

const ImageWrap = forwardRef(({ children, width = 320, className, variant, border = true }, ref) => {
  function containerClasses() {
    let result = `${attachVariant(variant, styles)}`
    if (border) result += ` ${styles.container_border}`
    else result += ` ${styles.container}`
    if (className) result += ` ${className}`
    return result
  }

  const containerProps = {
    className: containerClasses(),
    ref,
  }

  return (
    <div {...containerProps} style={{ width }}>
      {children}
    </div>
  )
})

export { ImageWrap }
