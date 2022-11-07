import styles from 'styles/components/sections/hero.module.scss'
import { useEffect, useState } from 'react'
import { Container, Wrap, Logo } from 'components'
import { Loader } from 'components/ui'
import sparkImage from 'public/spark3.webp'
import stephImage from 'public/steph.webp'
import Image from 'next/image'
import gsap from 'gsap'

export function Hero() {
  const [sparkReady, setSparkReady] = useState(false)
  const [stephReady, setStephReady] = useState(false)
  const imagesReady = sparkReady && stephReady
  const variant = 'green'
  const containerProps = {
    className: styles.container,
    section: false,
    padding: false,
    variant,
  }
  const sparkProps = {
    onLoadingComplete: () => setSparkReady(true),
    src: sparkImage,
    height: 702,
    width: 702,
  }

  const topSpark = {
    className: styles.top_spark,
    id: 'topSpark',
  }

  const stephProps = {
    onLoadingComplete: () => setStephReady(true),
    src: stephImage,
    height: 410,
    width: 520,
  }

  useEffect(() => {
    if (!imagesReady) return
    const tl = gsap.timeline()
    tl.to('#topSpark', { duration: 0.4, opacity: 1, maskSize: 600 }).to('#topSpark', { duration: 0.8, opacity: 0.3, maskSize: 300, repeat: -1, yoyo: true })
  }, [imagesReady])

  return (
    <Container {...containerProps}>
      <Wrap className={styles.wrap}>
        <Logo className={styles.logo} />
        <div className={styles.animation}>
          {!imagesReady && <Loader variant={variant} />}
          <div style={{ visibility: !imagesReady && 'hidden' }}>
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
        </div>
      </Wrap>
    </Container>
  )
}
