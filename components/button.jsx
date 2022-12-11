import styles from 'styles/components/button.module.scss'
import { attachVariant } from 'scripts'

export function Button({ id, children, variant, onClick, className }) {
  const customClass = className ? className : ''
  const classes = `${styles.button} ${attachVariant(variant, styles)} ${customClass}`
  const props = {
    id: id ? id : null,
    className: classes,
    onClick,
  }
  return <button {...props}>{children}</button>
}
