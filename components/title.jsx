import styles from 'styles/components/title.module.scss'

export function Title({ id, className, children, small = false, margin = true }) {
  const marginClass = margin ? styles.margin : ''
  const customClass = className ? className : ''
  const smallClass = small ? styles.small : ''
  const containerClasses = `${styles.container} ${smallClass} ${marginClass} ${customClass}`
  const customID = {
    id: id ? id : null,
  }

  return (
    <h2 {...customID} className={containerClasses}>
      {children}
    </h2>
  )
}
