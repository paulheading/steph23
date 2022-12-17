import styles from 'styles/components/ui/menu.module.scss'
import { Dropdown, Anchor } from 'components/ui/menu'
import { useEffect, useState, useRef } from 'react'
import { isRouteActive } from 'scripts'
import { useRouter } from 'next/router'
import menu from 'data/menu'

export function Menu({ variant }) {
  const [openDropDownID, setDropDownID] = useState(null)
  const { route } = useRouter()
  const navRef = useRef(null)

  useEffect(() => {
    if (!navRef.current || !openDropDownID) return

    window.addEventListener('click', function (event) {
      if (navRef.current === null) setDropDownID(null)
      else if (!navRef.current.contains(event.target)) setDropDownID(null)
    })

    document.onkeydown = function (event) {
      event = event || window.event
      let isEscape = false
      if ('key' in event) isEscape = event.key === 'Escape' || event.key === 'Esc'
      if (isEscape) {
        setDropDownID(null)
      }
    }
  }, [navRef, openDropDownID])

  function items(item, index) {
    const props = {
      active: isRouteActive(item.href, route),
      openDropDownID,
      setDropDownID,
      variant,
      ...item,
      index,
    }
    if (item.items) return <Dropdown key={'dropdown' + index} {...props} />
    return <Anchor key={'anchor' + index} {...props} />
  }

  return (
    <div className={styles.container}>
      <nav ref={navRef} className={styles.nav}>
        <ul className={styles.list}>{menu.map(items)}</ul>
      </nav>
    </div>
  )
}

export * from 'components/ui/menu/anchor'
export * from 'components/ui/menu/burger'
export * from 'components/ui/menu/dropdown'
