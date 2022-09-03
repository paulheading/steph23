import styles from 'styles/components/wrap.module.scss'

export function Wrap({ className, children }) {
  const hasClassName = className ? className : ''
  const wrapClasses = `${styles.wrap} ${hasClassName}`

  return (
    <div className={styles.container}>
      <div className={wrapClasses}>{children}</div>
    </div>
  )
}
