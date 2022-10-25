import styles from 'styles/components/split.module.scss'

export function Split({ children, className, swap = false, apart = false }) {
  const customClass = className ? className : ''
  const swapClass = swap ? styles.swap : ''
  const apartClass = apart ? styles.container_apart : styles.container_columns
  const containerClasses = `${apartClass} ${swapClass} ${customClass}`
  return <div className={containerClasses}>{children}</div>
}
