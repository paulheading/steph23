import styles from 'styles/components/sections/hero.module.scss'
import { Container, Wrap, Logo } from 'components'
import { useRef, useEffect, useState } from 'react'
import sparkImage from 'public/spark3.webp'
import stephImage from 'public/steph.webp'
import { Loader } from 'components/ui'
import { hero } from 'scripts'
import Image from 'next/image'

export function Hero() {
  const sparkRef = useRef(null)
  const [sparkReady, setSparkReady] = useState(false)
  const [stephReady, setStephReady] = useState(false)
  const imagesReady = sparkReady && stephReady
  const variant = 'green'
  const containerProps = {
    className: styles.container,
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
    ref: sparkRef,
  }

  const stephProps = {
    onLoadingComplete: () => setStephReady(true),
    src: stephImage,
    height: 410,
    width: 520,
  }

  useEffect(() => {
    if (!imagesReady || !sparkRef) return
    const { sparkle } = hero
    sparkle(sparkRef.current)
  }, [imagesReady, sparkRef])

  return (
    <Container {...containerProps}>
      <Wrap className={styles.wrap}>
        <Logo className={styles.logo} />
        <div className={styles.animation}>
          {!imagesReady && <Loader />}
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
