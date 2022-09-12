import { intro } from 'data/playlist'
import { Container, Wrap, Title, Image } from 'components'
import { Player } from 'components/ui'
import styles from 'styles/components/sections/studio.module.scss'

export function Studio({ active, setActive, variant }) {
  const handleSetActive = (track) => setActive(track)
  const playerProps = {
    data: intro[0],
    handleSetActive,
    dark: true,
    variant,
    active,
  }
  const alt = 'studio'
  const imageProps = {
    height: 360,
    width: 270,
    src: alt,
    variant,
  }
  const containerProps = {
    dark: true,
    variant,
  }

  return (
    <Container {...containerProps}>
      <Wrap className={styles.wrap}>
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
            <p>
              <strong>Live Direction available via</strong>
              <br />
              Source Connect, Cleanfeed, Zoom, Skype
            </p>
          </div>
        </div>
        <div className={styles.sample}>
          <div className={styles.wrap_player}>
            <Player {...playerProps} />
          </div>
          <Image {...imageProps} alt={alt} />
        </div>
      </Wrap>
    </Container>
  )
}
