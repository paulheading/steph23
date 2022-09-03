import styles from 'styles/components/menu.module.scss'
import { MdArrowDropDown } from 'react-icons/md'
import { Anchor } from 'components/menu/anchor'
import { attachVariant } from 'scripts'

export function Dropdown({ title, items, active, variant }) {
  const variantClass = attachVariant(variant, styles)
  const activeClass = active ? styles.active : ''
  const buttonClasses = `${styles.button} ${activeClass} ${variantClass}`
  const listClasses = `${styles.dropdown_list} ${variantClass}`
  return (
    <li className={styles.item}>
      <button className={buttonClasses}>
        {title}
        <MdArrowDropDown className={styles.MdArrowDropDown} />
      </button>
      <ul className={listClasses}>
        {items.map((item, index) => {
          const props = {
            dropdown: true,
            variant,
            ...item,
            active,
          }
          return <Anchor key={`ddanchor${index}`} {...props} />
        })}
      </ul>
    </li>
  )
}
