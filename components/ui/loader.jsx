import { attachVariant } from 'scripts'
import styles from 'styles/components/ui/loader.module.scss'

export function Loader({ variant }) {
  const iconClasses = `${styles.icon} ${attachVariant(variant, styles)}`

  return (
    <div className={styles.wrap}>
      <div className={iconClasses}></div>
      <div className={iconClasses}></div>
      <div className={iconClasses}></div>
      <div className={iconClasses}></div>
      <div className={iconClasses}></div>
      <div className={iconClasses}></div>
    </div>
  )
}
