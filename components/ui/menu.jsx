import styles from 'styles/components/ui/menu.module.scss'
import { Dropdown } from 'components/ui/menu/dropdown'
import { useEffect, useState, useRef } from 'react'
import { Anchor } from 'components/ui/menu/anchor'
import { Burger, Overlay } from 'components/ui/menu/burger'
import { useRouter } from 'next/router'
import menu from 'data/menu'
import gsap from 'gsap'

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
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!navRef.current || !openDropDownID) return
    window.addEventListener('click', function (e) {
      if (!navRef.current) return
      if (!navRef.current.contains(e.target)) setDropDownID(null)
    })
  }, [navRef, openDropDownID])

  function toggleMenu() {
    if (!menuRef.current) return
    const toggle = menuOpen ? '100%' : '0%'
    gsap.to(menuRef.current, { x: toggle })
    setMenuOpen(!menuOpen)
  }

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
          <li className={styles.burger_item}>
            <Burger toggleMenu={toggleMenu} />
          </li>
        </ul>
      </nav>
      <Overlay ref={menuRef} />
    </div>
  )
}
