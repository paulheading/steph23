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

  function PrintVideos() {
    if (video.constructor === Array) return video.map((video, index) => <Video key={'video' + index} {...video} />)
    return <Video {...video} />
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
          {video && (
            <div className="margin-top-4">
              <PrintVideos />
            </div>
          )}
        </Wrap>
      </Container>
    </Page>
  )
}
