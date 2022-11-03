import { useEffect, useState, useRef } from 'react'
import { Container, Wrap, Logo } from 'components'
import Image from 'next/image'
import styles from 'styles/components/sections/hero.module.scss'
import gsap from 'gsap'

export function Hero() {
  const [sparkReady, setSparkReady] = useState(false)
  const [stephReady, setStephReady] = useState(false)
  const sparkRef = useRef(null)
  const containerProps = {
    className: styles.container,
    variant: 'green',
    section: false,
    padding: false,
  }
  const sparkProps = {
    onLoad: () => setSparkReady(true),
    src: '/spark3.webp',
    priority: true,
    height: 702,
    width: 702,
  }
  const topSpark = {
    className: styles.top_spark,
    ref: sparkRef,
  }
  const stephProps = {
    onLoad: () => setStephReady(true),
    src: '/steph.webp',
    height: 410,
    width: 520,
  }

  useEffect(() => {
    if (!sparkRef.current) return
    const tl = gsap.timeline({ delay: 1 })
    const { current } = sparkRef

    tl
    .to(current, { duration: 0.4, opacity: 1, maskSize: 600 })
    .to(current, { duration: 0.8, opacity: 0.3, maskSize: 300, repeat: -1, yoyo: true })
  }, [sparkRef])

  return (
    <Container {...containerProps}>
      <Wrap className={styles.wrap}>
        <Logo className={styles.logo} />
        <div className={styles.animation}>
          <div className={styles.steph}>
            <Image {...stephProps} alt="steph" />
          </div>
          <div className={styles.wrap_spark}>
            <div {...topSpark}>
              <Image {...sparkProps} alt="spark" />
            </div>
            <div className={styles.bg_spark}>
              <Image {...sparkProps} alt="spark" />
            </div>
          </div>
        </div>
      </Wrap>
    </Container>
  )
}
