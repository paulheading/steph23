import { Container, Wrap, Split, Title, ImageWrap, Link } from 'components'
import styles from 'styles/components/sections/studio.module.scss'
import studioImage from 'public/studio.webp'
import { homepage } from 'data/playlist'
import { Player } from 'components/ui'
import { imageProps, intro, studio } from 'scripts'
import { useRef, useEffect } from 'react'
import Image from 'next/image'

export function Studio({ active, setActive, variant }) {
  const imageRef = useRef(null)
  const playerRef = useRef(null)
  const handleSetActive = (track) => setActive(track)
  const playerProps = {
    className: styles.player,
    data: homepage[4],
    handleSetActive,
    ref: playerRef,
    dark: true,
    variant,
    active,
  }

  const studioProps = {
    ...imageProps,
    src: studioImage,
    height: 360,
    width: 270,
  }

  const containerProps = {
    dark: true,
    variant,
  }

  const wrapProps = {
    width: studioProps.width,
    border: false,
    ref: imageRef,
  }

  useEffect(() => {
    if (!imageRef || !playerRef) return
    const { scroll } = intro
    const { wiggle } = studio

    scroll(playerRef.current)
    wiggle({ target: imageRef.current })
  }, [imageRef, playerRef])

  return (
    <Container {...containerProps}>
      <Wrap>
        <Split apart>
          <div className={styles.message}>
            <Title className={styles.title}>Home Studio</Title>
            <div className={styles.copy}>
              <p>
                Session Booth Studio
                <br />
                Rode NT1-A Microphone
              </p>
              <p>
                Focusrite Scarlett Solo Interface
                <br />
                Logic Pro DAW
                <br />
                iZotope RX8 Standard
                <br />
                Hardwired Superfast Broadband
              </p>
              <p className="margin-bottom-2">
                <strong>Live Direction available via</strong>
                <br />
                Source Connect, Cleanfeed, Zoom, Skype
              </p>
              <p>
                <Link href="/contact">Get in touch</Link> for a demo from your script!
              </p>
            </div>
          </div>
          <div className={styles.sample}>
            <Player {...playerProps} />
            <ImageWrap {...wrapProps}>
              <Image {...studioProps} alt="Stephanie Cannon smiling in a pink cardigan with her head tilted to the left" />
            </ImageWrap>
          </div>
        </Split>
      </Wrap>
    </Container>
  )
}
