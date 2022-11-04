import styles from 'styles/components/logo.module.scss'
import { Steph } from 'logos'

export function Logo({ className }) {
  const customClass = className ? className : ''

  return (
    <div className={customClass}>
      <div className={styles.container}>
        <div className="position-relative">
          <Steph className={styles.svg} />
          <div className={styles.shadow}></div>
        </div>
      </div>
    </div>
  )
}
