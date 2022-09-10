import { Container, Wrap } from 'components'
import { VO } from 'logos'
import Image from 'next/image'
import styles from 'styles/components/sections/hero.module.scss'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export function Hero() {
  const sparkRef = useRef(null)
  const containerProps = {
    className: styles.container,
    section: false,
    padding: false,
    top: true,
  }
  const sparkProps = {
    src: '/spark.png',
    priority: true,
    height: 702,
    width: 702,
  }
  const stephProps = {
    src: '/steph.png',
    height: 410,
    width: 520,
  }

  useEffect(() => {
    if (!sparkRef.current) return
    const defaults = { ease: 'none' }
    const spin = gsap.timeline({ defaults })
    const fade = gsap.timeline({ defaults })
    const target = sparkRef.current
    fade.to(target, { duration: 1, opacity: 1 })
    spin.to(target, { rotate: 360, duration: 36, repeat: 3 })
  }, [sparkRef])

  return (
    <Container {...containerProps}>
      <Wrap className={styles.wrap}>
        <div className={styles.logo}>
          <VO className={styles.svg} />
          <div className={styles.shadow}></div>
        </div>
        <div className={styles.animation}>
          <div className={styles.steph}>
            <Image {...stephProps} alt="steph" />
          </div>
          <div ref={sparkRef} className={styles.spark}>
            <Image {...sparkProps} alt="spark" />
          </div>
        </div>
      </Wrap>
    </Container>
  )
}
