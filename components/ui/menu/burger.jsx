import styles from 'styles/components/ui/menu/burger.module.scss'
import { attachVariant, overlay as animate } from 'scripts'
import { Anchor, Dropdown } from 'components/ui/menu'
import { Fragment, useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { Container } from 'components'
import menu from 'data/menu'

export function Burger({ variant = 'green' }) {
  const [openDropDownID, setDropDownID] = useState(null)
  const buttonClasses = `${styles.button} ${attachVariant(variant, styles)}`
  const overlayClasses = `${styles.overlay} ${attachVariant(variant, styles)}`
  const { toggle } = animate
  const overlayProps = {
    className: overlayClasses,
    id: 'overlay',
  }
  const buttonProps = {
    className: buttonClasses,
    onClick: () => toggle(),
  }

  function Items(item, index) {
    const props = {
      openDropDownID,
      setDropDownID,
      variant,
      ...item,
      index,
    }
    return item.items ? <Dropdown key={'dropdown' + index} {...props} /> : <Anchor key={'anchor' + index} {...props} />
  }

  return (
    <Fragment>
      <div className={styles.wrap}>
        <button {...buttonProps}>
          <HiMenu className={styles.HiMenu} />
        </button>
      </div>
      <div className={styles.container}>
        <div {...overlayProps}>
          <Container fill="false">
            <ul className={styles.list}>{menu.map(Items)}</ul>
          </Container>
        </div>
      </div>
    </Fragment>
  )
}
