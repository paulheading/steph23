import { intro } from 'data/playlist'
import { Container, Wrap, Player, Title } from 'components'
import styles from 'styles/components/intro.module.scss'

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

  function setInvert(key) {
    switch (key) {
      case 0:
        return true
      case 2:
        return true
      default:
        return false
    }
  }

  return (
    <Container variant="red">
      <Wrap className={styles.wrap}>
        <div className={styles.players}>
          {intro.map((track, index) => (
            <Player key={`player${index}`} data={track} {...playerProps} standalone variant={setVariant(index)} invert={setInvert(index)} />
          ))}
        </div>
        <div className={styles.message}>
          <Title className={styles.title}>Hey, I’m Steph</Title>
          <div className={styles.copy}>
            I’m an American Female Actor, Voice Talent and Audiobook Narrator with over 20 years experience. I offer a quick turnaround service from my professional home studio in London, or I’m a short cycle from your preferred recording studio! With my dedication and creativity, I can ignite that
            special spark in your next project.
          </div>
        </div>
      </Wrap>
    </Container>
  )
}
