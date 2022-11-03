import styles from 'styles/components/title.module.scss'

export function Title({ className, children, small = false, margin = true }) {
  const marginClass = margin ? styles.margin : ''
  const customClass = className ? className : ''
  const smallClass = small ? styles.small : ''
  const containerClasses = `${styles.container} ${smallClass} ${marginClass} ${customClass}`

  return <h2 className={containerClasses}>{children}</h2>
}
