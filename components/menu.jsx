import styles from 'styles/components/menu.module.scss'
import { useRouter } from 'next/router'
import { Dropdown } from 'components/menu/dropdown'
import { Anchor } from 'components/menu/anchor'
import menu from 'data/menu'

export function Menu({ variant }) {
  const { route } = useRouter()
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.list}>
          {menu.map((item, index) => {
            const props = {
              active: item.href === route,
              variant,
              ...item,
            }
            return item.items ? <Dropdown key={`dropdown${index}`} {...props} /> : <Anchor key={`anchor${index}`} {...props} />
          })}
        </ul>
      </nav>
    </div>
  )
}
