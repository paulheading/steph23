import demosImage from 'public/stephanie-cannon-headphones-pic2-demos.webp'
import { Page, Container, Wrap, Title, Split, ImageWrap } from 'components'
import styles from 'styles/pages/demos.module.scss'
import { imageProps, studio } from 'scripts'
import { useState, useEffect } from 'react'
import { Playlist } from 'components/ui'
import { demos } from 'data/seo'
import { all } from 'data/demos'
import Image from 'next/image'

export default function Demos() {
  imageProps.src = demosImage

  const [active, setActive] = useState(null)
  const [openID, setOpenID] = useState(null)
  const handleSetActive = (track) => setActive(track)
  function handleSetOpenID(id) {
    setActive({ ...active, playing: false })
    setOpenID(id)
  }
  const variant = 'red'
  const pageProps = {
    head: demos.index,
    footer: 'cream',
    menu: variant,
  }
  const containerProps = {
    top: true,
    variant,
  }
  const playlistProps = {
    handleSetActive,
    handleSetOpenID,
    toggle: true,
    variant,
    active,
    openID,
  }

  function oddPlaylists(value) {
    return all.map((data, index) => {
      const odd = index % 2
      if (value === odd) return
      const props = {
        ...playlistProps,
        data,
      }
      return <Playlist key={`data${index}`} {...props} />
    })
  }

  useEffect(() => {
    const { wiggle } = studio
    wiggle({ target: '#image' })
  }, [])

  return (
    <Page {...pageProps}>
      <Container {...containerProps}>
        <Wrap>
          <Split className={styles.intro}>
            <div className={styles.copy}>
              <Title>Demos</Title>
              <p>I’m an award nominated voice actor with over 20 years experience, working in almost every area of the industry. I have a smooth, engaging voice with a US/transatlantic accent.</p>
              <p>As a trained actor, I’m proficient with crafting characters and accents. I’m also a skilled improviser, but am equally comfortable taking direction.</p>
              <p>I can deliver professional and friendly voices for e-learning or corporate reads, characters for radio drama and games, or child voices for animation and audiobooks.</p>
            </div>
            <ImageWrap id="image">
              <Image {...imageProps} alt="Stephanie Cannon wearing headphones and smiling broadly" />
            </ImageWrap>
          </Split>
          <Split className={styles.playlists}>
            <div className={styles.odds}>{oddPlaylists(1)}</div>
            <div className={styles.evens}>{oddPlaylists(0)}</div>
          </Split>
        </Wrap>
      </Container>
    </Page>
  )
}
