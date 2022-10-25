import { homepage } from 'data/playlist'
import { Container, Wrap, Split, Title, Image as Portrait, Link } from 'components'
import { Player } from 'components/ui'
import styles from 'styles/components/sections/studio.module.scss'
import { createImageSrc } from 'scripts'

export function Studio({ active, setActive, variant }) {
  const handleSetActive = (track) => setActive(track)
  const playerProps = {
    className: styles.player,
    handleSetActive,
    data: homepage[4],
    dark: true,
    variant,
    active,
  }

  const imageProps = {
    ...createImageSrc('studio'),
    height: 360,
    width: 270,
    variant,
  }
  const containerProps = {
    section: false,
    id: 'studio',
    dark: true,
    variant,
  }

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
            <Portrait {...imageProps} />
          </div>
        </Split>
      </Wrap>
    </Container>
  )
}
