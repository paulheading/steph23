import styles from 'styles/components/logo.module.scss'
import useMediaQuery from 'hooks/useMediaQuery'
import { StephDesktop, StephMobile } from 'logos'

export function Logo({ className }) {
  const isDesktop = useMediaQuery(`(min-width: 520px)`)
  const customClass = className ? className : ''

  return (
    <div className={customClass}>
      <div className={styles.container}>
        <StephDesktop className={styles.svg} />
        <div className={styles.shadow}></div>
      </div>
    </div>
  )
}
