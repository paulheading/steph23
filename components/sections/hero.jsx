import { useEffect, useState, useRef } from 'react'
import { Container, Wrap } from 'components'
import { VO } from 'logos'
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
    src: '/spark.webp',
    priority: true,
    height: 702,
    width: 702,
  }
  const stephProps = {
    onLoad: () => setStephReady(true),
    src: '/steph.webp',
    height: 410,
    width: 520,
  }

  useEffect(() => {
    if (sparkReady || stephReady) return
  }, [sparkReady, stephReady])

  useEffect(() => {
    if (!sparkRef.current) return
    const tl = gsap.timeline()
    const { current } = sparkRef

    tl
    .to(current, { duration: 0.4, opacity: 1, maskSize: 700 })
    .to(current, { duration: 0.8, opacity: 0.5, maskSize: 300, repeat: -1, yoyo: true })
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
