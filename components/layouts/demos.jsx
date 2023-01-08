import styles from 'styles/components/layouts/demos.module.scss'
import { Page, Container, Wrap, Split, VideoWrap } from 'components'
import { Playlist } from 'components/ui'
import { useState } from 'react'

function DemosLayout({ children, audio, videos, head }) {
  const [active, setActive] = useState(audio.main)
  const handleSetActive = (track) => setActive(track)
  const variant = 'red'

  const pageProps = {
    footer: variant,
    menu: variant,
    head,
  }

  const containerProps = {
    top: true,
    variant,
  }

  const playlistProps = {
    handleSetActive,
    data: audio,
    variant,
    active,
  }

  return (
    <Page {...pageProps}>
      <Container {...containerProps}>
        <Wrap>
          <Split>
            <div className={styles.copy}>{children}</div>
            <Playlist {...playlistProps} />
          </Split>
          {videos && videos.map((props, index) => <VideoWrap key={'video' + index} {...props} />)}
        </Wrap>
      </Container>
    </Page>
  )
}

export default DemosLayout
