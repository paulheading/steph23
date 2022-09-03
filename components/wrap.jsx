import styles from 'styles/components/wrap.module.scss'

export function Wrap({ className, children }) {
  const wrapClasses = `${styles.wrap} ${className}`

  return (
    <div className={styles.container}>
      <div className={wrapClasses}>{children}</div>
    </div>
  )
}
