import styles from 'styles/components/title.module.scss'

export function Title({ className, children }) {
  const customClass = className ? className : ''
  const containerClasses = `${styles.container} margin-bottom-1 ${customClass}`

  return <h2 className={containerClasses}>{children}</h2>
}
