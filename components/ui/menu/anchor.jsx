import styles from 'styles/components/ui/menu/anchor.module.scss'
import { attachVariant, isRouteActive } from 'scripts'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { overlay } from 'scripts'
import useMediaQuery from 'hooks/useMediaQuery'

export function Anchor({ title, href, dropdown, variant }) {
  const router = useRouter()
  const activeClass = isRouteActive(href, router.asPath) ? styles.active : ''
  const itemClass = dropdown ? styles.dropdown_item : styles.item
  const anchorClass = dropdown ? styles.dropdown_anchor : styles.anchor
  const anchorClasses = `${anchorClass} ${activeClass} ${attachVariant(variant, styles)}`
  const isTablet = useMediaQuery(`(min-width: 768px)`)

  function navigate(event) {
    const { close } = overlay
    event.preventDefault()
    if (href !== router.asPath) router.push(href)
    if (!isTablet) close()
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
