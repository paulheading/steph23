import styles from 'styles/components/ui/menu/burger.module.scss'
import { Fragment, useState, useRef } from 'react'
import { HiMenu } from 'react-icons/hi'
import { attachVariant, isRouteActive } from 'scripts'
import { Anchor, Dropdown } from 'components/ui/menu'
import { Container, Wrap, Logo } from 'components'
import { useRouter } from 'next/router'
import menu from 'data/menu'
import gsap from 'gsap'

export function Burger({ toggleMenu, variant = 'green' }) {
  const [openDropDownID, setDropDownID] = useState(null)
  const [overlayOpen, setOverlayOpen] = useState(false)
  const { route } = useRouter()
  const overlayRef = useRef(null)
  const buttonClasses = `${styles.button} ${attachVariant(variant, styles)}`
  const overlayClasses = `${styles.overlay} ${attachVariant(variant, styles)}`
  const overlayProps = {
    className: overlayClasses,
    ref: overlayRef,
  }

  function toggleMenu() {
    if (!overlayRef.current) return
    const { current } = overlayRef
    const tl = gsap.timeline({ defaults: { ease: 'circ.out', duration: 0.2 } })
    if (overlayOpen) {
      tl.to('body', { clearProps: 'overflow' }).to(current, { x: '100%' })
    } else {
      tl.to('body', { overflow: 'hidden' }).to(current, { x: '0%' })
    }

    setOverlayOpen(!overlayOpen)
  }

  const buttonProps = {
    className: buttonClasses,
    onClick: toggleMenu,
  }

  return (
    <Fragment>
      <Wrap className={styles.wrap}>
        <div></div>
        {/* <Logo className={styles.logo} /> */}
        <button {...buttonProps}>
          <HiMenu className={styles.HiMenu} />
        </button>
      </Wrap>
      <div className={styles.container}>
        <div {...overlayProps}>
          <Container fill="false">
            <ul className={styles.list}>
              {menu.map((item, index) => {
                const props = {
                  active: isRouteActive(item.href, route),
                  openDropDownID,
                  setDropDownID,
                  variant,
                  ...item,
                  index,
                }
                return item.items ? <Dropdown key={'dropdown' + index} {...props} /> : <Anchor key={'anchor' + index} {...props} />
              })}
            </ul>
          </Container>
        </div>
      </div>
    </Fragment>
  )
}
