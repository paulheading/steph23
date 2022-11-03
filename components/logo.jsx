import styles from 'styles/components/logo.module.scss'
import { VO } from 'logos'

export function Logo({ className }) {
  const customClass = className ? className : ''

  return (
    <div className={customClass}>
      <div className={styles.container}>
        <VO className={styles.svg} />
        <div className={styles.shadow}></div>
      </div>
    </div>
  )
}
