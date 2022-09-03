import styles from 'styles/components/container.module.scss'
import { attachVariant } from 'scripts'

export function Container({ className, variant, dark = false, section = true, padding = true, children }) {
  const darkClass = dark ? styles.dark : ''
  const sectionClass = section ? styles.section : ''
  const paddingClass = padding ? styles.padding : ''
  const containerClasses = `${styles.container} ${className} ${attachVariant(variant, styles)} ${darkClass} ${sectionClass} ${paddingClass}`

  return <div className={containerClasses}>{children}</div>
}
