import styles from 'styles/components/title.module.scss'

export function Title({ className, children }) {
  const containerClasses = `${styles.container} ${className}`

  return <h2 className={containerClasses}>{children}</h2>
}
