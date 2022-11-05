import styles from 'styles/components/ui/menu/anchor.module.scss'
import { attachVariant, isRouteActive, overlay } from 'scripts'
import { useRouter } from 'next/router'
import Link from 'next/link'

export function Anchor({ title, href, dropdown, variant }) {
  const router = useRouter()
  const activeClass = isRouteActive(href, router.asPath) ? styles.active : ''
  const itemClass = dropdown ? styles.dropdown_item : styles.item
  const anchorClass = dropdown ? styles.dropdown_anchor : styles.anchor
  const anchorClasses = `${anchorClass} ${activeClass} ${attachVariant(variant, styles)}`

  function navigate(event) {
    event.preventDefault()
    if (href === router.asPath) overlay.close()
    else {
      router.push(href)
      overlay.close()
    }
  }

  const anchorProps = {
    className: anchorClasses,
    onClick: navigate,
  }

  return (
    <li className={itemClass}>
      <Link href={href}>
        <a {...anchorProps}>{title}</a>
      </Link>
    </li>
  )
}
