import { useState } from 'react'
import { eLearning, advertising, gaming } from 'data/playlist'
import { Page, Content, Title } from 'components'
import { Playlist } from 'components/ui'
import { demos } from 'scripts/head'
import styles from 'styles/pages/demos.module.scss'

const playlists = [eLearning, advertising, gaming]

export default function Demos() {
  const [active, setActive] = useState(playlists[0].main)
  const [openID, setOpenID] = useState(playlists[0].id)
  const handleSetActive = (track) => setActive(track)
  function handleSetOpenID(id) {
    setActive({ ...active, playing: false })
    setOpenID(id)
  }
  const pageProps = {
    head: demos,
    menu: 'red',
    footer: 'cream',
  }
  const contentProps = {
    className: 'text-align-center',
    variant: 'red',
    top: true,
  }
  const playlistProps = {
    handleSetActive,
    handleSetOpenID,
    variant: 'red',
    toggle: true,
    active,
    openID,
  }

  function oddPlaylists(value) {
    return playlists.map((data, index) => {
      const odd = index % 2
      if (value === odd) return
      const props = {
        key: `data${index}`,
        ...playlistProps,
        data,
      }
      return <Playlist {...props} />
    })
  }

  return (
    <Page {...pageProps}>
      <Content {...contentProps}>
        <Title>Demos</Title>
        <p>I’m an award nominated voice actor with over 20 years experience, working in almost every area of the industry. I have a smooth, engaging voice with a US/transatlantic accent.</p>
        <p>As a trained actor, I’m proficient with crafting characters and accents. I’m also a skilled improviser, but am equally comfortable taking direction.</p>
        <p>I can deliver professional and friendly voices for e-learning or corporate reads, characters for radio drama and games, or child voices for animation and audiobooks.</p>
        <div className={styles.grid}>
          <div className={styles.column}>{oddPlaylists(1)}</div>
          <div className={styles.column}>{oddPlaylists(0)}</div>
        </div>
      </Content>
    </Page>
  )
}
