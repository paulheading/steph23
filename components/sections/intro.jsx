import { homepage } from 'data/playlist'
import { Container, Wrap, Title, Split, Link } from 'components'
import { Player } from 'components/ui'
import { Nominee } from 'logos'
import styles from 'styles/components/sections/intro.module.scss'
import { useEffect } from 'react'
import { intro } from 'scripts'

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

  const splitProps = {
    className: styles.split,
    swap: true,
  }

  const demoLinkProps = {
    href: '/demos',
    bold: true,
  }

  useEffect(() => {
    const players = '.intro-player'
    const { reset, scroll } = intro

    reset(players)
    scroll(players)
  }, [])

  return (
    <Container {...contentProps}>
      <Wrap className={styles.wrap}>
        <Split {...splitProps}>
          <div className={styles.message}>
            <Title id="title" className={styles.title}>
              A Smooth, Enticing, Youthful US Voice
            </Title>
            <div id="copy" className={styles.copy}>
              <p>
                I’m an American Voiceover, Actor and Audiobook Narrator with over 20 years experience. I offer a quick turnaround service from my professional home studio in London, or I’m a short cycle from your preferred recording studio! With my dedication and creativity, I can ignite that
                special spark in your next project.
              </p>
              <p>
                Here are a few of my audio samples. You can also visit my <Link {...demoLinkProps}>Demos</Link> section to hear more.
              </p>
              <div id="nominee">
                <Nominee className="margin-top-3" />
              </div>
            </div>
          </div>
          <div className={styles.players}>
            {homepage.map((track, index) => {
              if (index > 3) return
              const props = {
                className: `${styles.player} intro-player`,
                variant: setVariant(index),
                dark: setDark(index),
                standalone: true,
                ...playerProps,
                data: track,
              }
              return <Player key={'players' + index} {...props} />
            })}
          </div>
        </Split>
      </Wrap>
    </Container>
  )
}
