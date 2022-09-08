import { useState } from 'react'
import styles from 'styles/components/ui/menu.module.scss'
import { useRouter } from 'next/router'
import { Dropdown } from 'components/ui/menu/dropdown'
import { Anchor } from 'components/ui/menu/anchor'
import menu from 'data/menu'

export function Menu({ variant }) {
  const [openDropDownID, setDropDownID] = useState(null)
  const { route } = useRouter()
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.list}>
          {menu.map((item, index) => {
            const props = {
              active: item.href === route,
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
