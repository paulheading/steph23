import styles from 'styles/components/ui/menu/burger.module.scss'
import { useRef } from 'react'
import { HiMenu } from 'react-icons/hi'
import { attachVariant } from 'scripts'
import { Fragment, useState } from 'react'
import { Container, Wrap } from 'components'
import gsap from 'gsap'

export function Burger({ toggleMenu, variant = 'green' }) {
  const [overlayOpen, setOverlayOpen] = useState(false)
  const overlayRef = useRef(null)
  const buttonClasses = `${styles.button} ${attachVariant(variant, styles)}`
  const containerProps = {
    section: false,
    fill: false,
    top: true,
  }

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
      <div ref={overlayRef} className={styles.overlay}>
        <Container {...containerProps}>menu</Container>
      </div>
    </Fragment>
  )
}
