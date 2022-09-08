import styles from 'styles/components/ui/menu.module.scss'
import { MdArrowDropDown } from 'react-icons/md'
import { Anchor } from 'components/ui/menu/anchor'
import { attachVariant } from 'scripts'

export function Dropdown({ title, items, active, variant, openDropDownID, setDropDownID, index }) {
  const variantClass = attachVariant(variant, styles)
  const activeClass = active ? styles.active : ''
  const isOpen = openDropDownID === index
  const openClass = isOpen ? styles.open : ''
  const buttonClasses = `${styles.button} ${activeClass} ${variantClass} ${openClass}`
  const listClasses = `${styles.dropdown_list} ${variantClass}`
  const dropDownID = !isOpen ? index : null

  const buttonProps = {
    onClick: () => setDropDownID(dropDownID),
    className: buttonClasses,
  }
  return (
    <li className={styles.item}>
      <button {...buttonProps}>
        {title}
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
            return <Anchor key={`ddanchor${index}`} {...props} />
          })}
        </ul>
      )}
    </li>
  )
}
