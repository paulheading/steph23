import { useState } from 'react'
import { Page, Container, Wrap, Split } from 'components'
import { Playlist } from 'components/ui'
import styles from 'styles/components/templates/demos.module.scss'

export function Template({ head, data, children, video }) {
  const [active, setActive] = useState(data.main)
  const handleSetActive = (track) => setActive(track)
  let iframeProps = {}
  const variant = 'red'
  const pageProps = {
    footer: 'cream',
    menu: variant,
    head,
  }
  const containerProps = {
    top: true,
    variant,
  }
  const playlistProps = {
    handleSetActive,
    variant,
    active,
    data,
  }

  if (video) {
    iframeProps = {
      src: `https://player.vimeo.com/video/${video.src}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`,
      allow: 'autoplay; fullscreen; picture-in-picture',
      allowfullscreen: true,
      title: video.title,
      frameborder: '0',
      height: '720',
      width: '1280',
    }
  }

  return (
    <Page {...pageProps}>
      <Container {...containerProps}>
        <Wrap className={styles.wrap}>
          <Split>
            <div>{children}</div>
            <div>
              <Playlist {...playlistProps} />
            </div>
          </Split>
          {video && (
            <div className={styles.wrap_iframe}>
              <iframe {...iframeProps} />
            </div>
          )}
        </Wrap>
      </Container>
    </Page>
  )
}
