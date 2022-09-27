import styles from 'styles/components/container.module.scss'
import { attachVariant } from 'scripts'

export function Container({ className, variant, dark = false, section = true, center = true, padding = true, top = false, footer = false, children, id }) {
  const darkClass = dark ? styles.dark : ''
  const sectionClass = section ? styles.section : ''
  const centerClass = center ? styles.center : ''
  const paddingClass = padding ? styles.padding : ''
  const topClass = top ? styles.top : ''
  const footerClass = footer ? styles.footer : ''
  const customClass = className ? className : ''
  const containerClasses = `${styles.container} ${customClass} ${attachVariant(variant, styles)} ${darkClass} ${sectionClass} ${centerClass} ${paddingClass} ${topClass} ${footerClass}`
  const props = {
    className: containerClasses,
    id,
  }

  return <div {...props}>{children}</div>
}
