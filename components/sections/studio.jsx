import { Container, Wrap, Split, Title, ImageWrap, Link } from 'components'
import styles from 'styles/components/sections/studio.module.scss'
import studioImage from 'public/studio.webp'
import { homepage } from 'data/playlist'
import { Player } from 'components/ui'
import { imageProps, intro, studio } from 'scripts'
import { useEffect } from 'react'
import Image from 'next/image'

export function Studio({ active, setActive, variant }) {
  const handleSetActive = (track) => setActive(track)
  const playerProps = {
    className: styles.player,
    data: homepage[4],
    handleSetActive,
    id: 'player',
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
    id: 'studio',
    dark: true,
    variant,
  }

  const wrapProps = {
    width: studioProps.width,
    border: false,
    id: 'image',
  }

  useEffect(() => {
    const player = '#player'
    const { reset, scroll } = intro
    const { wiggle } = studio

    reset(player)
    scroll(player)
    wiggle({ target: '#image' })
  }, [])

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
