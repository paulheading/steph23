import { forwardRef } from 'react'
import styles from 'styles/components/button.module.scss'
import { attachVariant } from 'scripts'

const Button = forwardRef(({ id, children, variant, onClick, className }, ref) => {
  const customClass = className ? className : ''
  const classes = `${styles.button} ${attachVariant(variant, styles)} ${customClass}`
  const props = {
    id: id ? id : null,
    className: classes,
    onClick,
  }
  return (
    <button ref={ref} {...props}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export { Button }
