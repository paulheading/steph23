import styles from 'styles/components/title.module.scss'

export function Title({ className, children, small = false }) {
  const customClass = className ? className : ''
  const smallClass = small ? styles.small : ''
  const containerClasses = `${styles.container} ${smallClass} margin-bottom-1 ${customClass}`

  return <h2 className={containerClasses}>{children}</h2>
}
