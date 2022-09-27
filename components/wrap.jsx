import styles from 'styles/components/wrap.module.scss'

export function Wrap({ className, children }) {
  const customClass = className ? className : ''
  const wrapClasses = `${styles.wrap} ${customClass}`

  return <div className={wrapClasses}>{children}</div>
}
