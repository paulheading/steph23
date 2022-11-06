import styles from 'styles/components/ui/menu/dropdown.module.scss'
import { MdArrowDropDown } from 'react-icons/md'
import { Anchor } from 'components/ui/menu/anchor'
import { attachVariant, isRouteActive } from 'scripts'
import { useRouter } from 'next/router'

export function Dropdown({ title, href, items, active, variant, openDropDownID, setDropDownID, index }) {
  const { route } = useRouter()
  const variantClass = attachVariant(variant, styles)
  const activeClass = isRouteActive(href, route, true) ? styles.active : ''
  const isOpen = openDropDownID === index
  const openClass = isOpen ? styles.open : ''
  const buttonClasses = `${styles.button} ${activeClass} ${variantClass} ${openClass}`
  const listClasses = `${styles.list} ${variantClass}`
  const dropDownID = !isOpen ? index : null

  const buttonProps = {
    onClick: () => setDropDownID(dropDownID),
    className: buttonClasses,
  }

  return (
    <li className={styles.item}>
      <button {...buttonProps}>
        <span className={styles.title}>{title}</span>
        <MdArrowDropDown className={styles.MdArrowDropDown} />
      </button>
      {isOpen && (
        <ul className={listClasses}>
          {items.map((item, index) => {
            const props = {
              dropdown: true,
              variant,
              ...item,
              active,
            }
            return <Anchor key={'ddanchor' + index} {...props} />
          })}
        </ul>
      )}
    </li>
  )
}
