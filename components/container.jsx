import styles from 'styles/components/container.module.scss'
import { attachVariant } from 'scripts'

export function Container({ className, variant, dark = false, section = true, padding = true, top = false, footer = false, children }) {
  const darkClass = dark ? styles.dark : ''
  const sectionClass = section ? styles.section : ''
  const paddingClass = padding ? styles.padding : ''
  const topClass = top ? styles.top : ''
  const footerClass = footer ? styles.footer : ''
  const hasClassName = className ? className : ''
  const containerClasses = `${styles.container} ${hasClassName} ${attachVariant(variant, styles)} ${darkClass} ${sectionClass} ${paddingClass} ${topClass} ${footerClass}`

  return <div className={containerClasses}>{children}</div>
}
