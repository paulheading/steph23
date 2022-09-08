import styles from 'styles/components/title.module.scss'

export function Title({ className, children }) {
  const hasClassName = className ? className : ''
  const containerClasses = `${styles.container} ${hasClassName}`

  return <h2 className={containerClasses}>{children}</h2>
}
