import styles from 'styles/components/sections/hero.module.scss'
import { useEffect, useState, useRef } from 'react'
import { Container, Wrap, Logo } from 'components'
import sparkImage from 'public/spark3.webp'
import stephImage from 'public/steph.webp'
import Image from 'next/image'
import gsap from 'gsap'
import { imageProps } from 'scripts'

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
    ...imageProps,
    onLoad: () => setSparkReady(true),
    src: sparkImage,
    height: 702,
    width: 702,
  }

  const topSpark = {
    className: styles.top_spark,
    ref: sparkRef,
  }

  const stephProps = {
    ...imageProps,
    onLoad: () => setStephReady(true),
    src: stephImage,
    height: 410,
    width: 520,
  }

  useEffect(() => {
    if (!stephReady || !sparkReady || !sparkRef.current) return
    const tl = gsap.timeline()
    const { current } = sparkRef
    tl.to(current, { duration: 0.4, opacity: 1, maskSize: 600 }).to(current, { duration: 0.8, opacity: 0.3, maskSize: 300, repeat: -1, yoyo: true })
  }, [stephReady, sparkReady, sparkRef])

  return (
    <Container {...containerProps}>
      <Wrap className={styles.wrap}>
        <Logo className={styles.logo} />
        <div className={styles.animation}>
          <div className={styles.steph}>
            <Image {...stephProps} alt="" />
          </div>
          <div className={styles.wrap_spark}>
            <div {...topSpark}>
              <Image {...sparkProps} alt="" />
            </div>
            <div className={styles.bg_spark}>
              <Image {...sparkProps} alt="" />
            </div>
          </div>
        </div>
      </Wrap>
    </Container>
  )
}
