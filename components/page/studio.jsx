import { intro } from 'data/playlist'
import { Container, Wrap, Player, Title } from 'components'
import styles from 'styles/components/studio.module.scss'
import Image from 'next/image'

export function Studio({ active, setActive }) {
  const handleSetActive = (track) => setActive(track)
  const playerProps = {
    data: intro[0],
    handleSetActive,
    variant: 'red',
    invert: true,
    active,
  }
  const imageProps = {
    src: '/studio.jpg',
    height: '360',
    alt: 'studio',
    width: '270',
  }
  const containerProps = {
    variant: 'red',
    dark: true,
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
          <div className={styles.wrap_image}>
            <Image {...imageProps} />
          </div>
        </div>
      </Wrap>
    </Container>
  )
}
