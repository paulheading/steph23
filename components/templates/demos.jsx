import { useState } from 'react'
import { Page, Container, Wrap, Split, Video } from 'components'
import { Playlist } from 'components/ui'

export function Template({ head, data, children, video }) {
  const [active, setActive] = useState(data.main)
  const handleSetActive = (track) => setActive(track)
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

  return (
    <Page {...pageProps}>
      <Container {...containerProps}>
        <Wrap>
          <Split>
            <div>{children}</div>
            <div>
              <Playlist {...playlistProps} />
            </div>
          </Split>
          {video && <Video {...video} className="margin-top-4" />}
        </Wrap>
      </Container>
    </Page>
  )
}
