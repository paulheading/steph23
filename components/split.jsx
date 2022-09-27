import styles from 'styles/components/split.module.scss'

export function Split({ children, className }) {
  const customClass = className ? className : ''
  const containerClasses = `${styles.container} ${customClass}`
  return <div className={containerClasses}>{children}</div>
}
