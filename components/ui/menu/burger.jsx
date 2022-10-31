import styles from 'styles/components/ui/menu/burger.module.scss'
import { useRef } from 'react'
import { HiMenu } from 'react-icons/hi'
import { attachVariant } from 'scripts'
import { Fragment, useState } from 'react'
import { Container, Wrap } from 'components'
import gsap from 'gsap'
import { useRouter } from 'next/router'
import menu from 'data/menu'
import { Dropdown } from 'components/ui/menu/dropdown'
import { Anchor } from 'components/ui/menu/anchor'

function checkRoute(href, route) {
  if (href === route) return true
  const parent = {
    route: route.split('/')[1],
    href: href.split('/')[1],
  }
  if (parent.href === parent.route) return true
  return false
}

export function Burger({ toggleMenu, variant = 'green' }) {
  const { route } = useRouter()
  const [overlayOpen, setOverlayOpen] = useState(false)
  const overlayRef = useRef(null)
  const buttonClasses = `${styles.button} ${attachVariant(variant, styles)}`
  const overlayClasses = `${styles.overlay} ${attachVariant(variant, styles)}`
  const overlayProps = {
    className: overlayClasses,
    ref: overlayRef,
  }

  console.log('variant: ', variant)

  function toggleMenu() {
    if (!overlayRef.current) return
    const { current } = overlayRef
    const toggle = overlayOpen ? '100%' : '0%'
    gsap.to(current, { x: toggle })
    setOverlayOpen(!overlayOpen)
  }

  const buttonProps = {
    className: buttonClasses,
    onClick: toggleMenu,
  }

  return (
    <Fragment>
      <Wrap className={styles.wrap}>
        <button {...buttonProps}>
          <HiMenu className={styles.HiMenu} />
        </button>
      </Wrap>
      <div {...overlayProps}>
        <Container fill="false">
          <ul className={styles.list}>
            {menu.map((item, index) => {
              const props = {
                active: checkRoute(item.href, route),
                variant,
                ...item,
                index,
              }
              return item.items ? <Dropdown key={'dropdown' + index} {...props} /> : <Anchor key={'anchor' + index} {...props} />
            })}
          </ul>
        </Container>
      </div>
    </Fragment>
  )
}
