import { homepage } from 'data/playlist'
import { Container, Wrap, Title, Split } from 'components'
import { Player } from 'components/ui'
import styles from 'styles/components/sections/intro.module.scss'
import Link from 'next/link'

export function Intro({ active, setActive }) {
  const handleSetActive = (track) => setActive(track)
  const playerProps = {
    handleSetActive,
    active,
  }

  function setVariant(key) {
    switch (key) {
      case 1:
        return 'yellow'
      case 2:
        return 'yellow'
      default:
        return 'cream'
    }
  }

  function setDark(key) {
    switch (key) {
      case 0:
        return true
      case 2:
        return true
      default:
        return false
    }
  }

  const contentProps = {
    variant: 'red',
  }

  return (
    <Container {...contentProps}>
      <Wrap className={styles.wrap}>
        <Split className={styles.split}>
          <div className={styles.players}>
            {homepage.map((track, index) => {
              if (index > 3) return
              const props = {
                variant: setVariant(index),
                className: styles.player,
                dark: setDark(index),
                standalone: true,
                ...playerProps,
                data: track,
              }
              return <Player key={'players' + index} {...props} />
            })}
          </div>
          <div className={styles.message}>
            <Title className={styles.title}>Smooth, Enticing, Youthful</Title>
            <div className={styles.copy}>
              <p>
                I’m an American Voiceover, Actor and Audiobook Narrator with over 20 years experience. I offer a quick turnaround service from my professional home studio in London, or I’m a short cycle from your preferred recording studio! With my dedication and creativity, I can ignite that
                special spark in your next project.
              </p>
              <p>
                Here are a few of my audio samples. You can also visit my&nbsp;
                <Link href="/demos">
                  <a>
                    <strong>Demos</strong>
                  </a>
                </Link>
                &nbsp;section to hear more.
              </p>
            </div>
          </div>
        </Split>
      </Wrap>
    </Container>
  )
}
