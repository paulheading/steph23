import styles from 'styles/components/ui/menu/burger.module.scss'
import { HiMenu } from 'react-icons/hi'
import { attachVariant } from 'scripts'
import { forwardRef } from 'react'
import { Container } from 'components'

export const Overlay = forwardRef(({ className }, ref) => {
  const customClass = className ? className : ''
  const overlayClasses = `${styles.overlay} ${customClass}`
  const containerProps = {
    section: false,
    fill: false,
    top: true,
  }

  return (
    <div ref={ref} className={overlayClasses}>
      <Container {...containerProps}>menu</Container>
    </div>
  )
})

export function Burger({ toggleMenu }) {
  const containerClasses = `${styles.container} ${attachVariant('green', styles)}`

  return (
    <button onClick={toggleMenu} className={containerClasses}>
      <HiMenu className={styles.HiMenu} />
    </button>
  )
}

Overlay.displayName = 'Overlay'
