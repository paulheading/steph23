import styles from 'styles/components/split.module.scss'

export function Split({ children, className }) {
  const hasClassName = className ? className : ''
  const containerClasses = `${styles.container} ${hasClassName}`
  return <div className={containerClasses}>{children}</div>
}
