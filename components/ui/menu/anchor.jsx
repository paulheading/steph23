import styles from 'styles/components/ui/menu.module.scss'
import { attachVariant } from 'scripts'
import Link from 'next/link'

export function Anchor({ title, href, dropdown, active, variant }) {
  const activeClass = active ? styles.active : ''
  const itemClass = !dropdown ? styles.item : styles.dropdown_item
  const anchorClass = !dropdown ? styles.anchor : styles.dropdown_anchor
  const anchorClasses = `${anchorClass} ${activeClass} ${attachVariant(variant, styles)}`
  return (
    <li className={itemClass}>
      <Link href={href}>
        <a className={anchorClasses}>{title}</a>
      </Link>
    </li>
  )
}
