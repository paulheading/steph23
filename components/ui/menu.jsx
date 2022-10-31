import styles from 'styles/components/ui/menu.module.scss'
import { Dropdown } from 'components/ui/menu/dropdown'
import { useEffect, useState, useRef } from 'react'
import { Anchor } from 'components/ui/menu/anchor'
import { useRouter } from 'next/router'
import menu from 'data/menu'

function checkRoute(href, route) {
  if (href === route) return true
  const parent = {
    route: route.split('/')[1],
    href: href.split('/')[1],
  }
  if (parent.href === parent.route) return true
  return false
}

export function Menu({ variant }) {
  const [openDropDownID, setDropDownID] = useState(null)
  const { route } = useRouter()
  const navRef = useRef(null)

  useEffect(() => {
    if (!navRef.current || !openDropDownID) return
    window.addEventListener('click', function (e) {
      if (!navRef.current) return
      if (!navRef.current.contains(e.target)) setDropDownID(null)
    })
  }, [navRef, openDropDownID])

  return (
    <div className={styles.container}>
      <nav ref={navRef} className={styles.nav}>
        <ul className={styles.list}>
          {menu.map((item, index) => {
            const props = {
              active: checkRoute(item.href, route),
              openDropDownID,
              setDropDownID,
              variant,
              ...item,
              index,
            }
            return item.items ? <Dropdown key={`dropdown${index}`} {...props} /> : <Anchor key={`anchor${index}`} {...props} />
          })}
        </ul>
      </nav>
    </div>
  )
}
