import { useState } from 'react'
import { Split, Video } from 'components'
import Page from 'components/page/demos'
import { Playlist } from 'components/ui'

export default function DemosLayout({ head, data, children, video }) {
  const [active, setActive] = useState(data.main)
  const handleSetActive = (track) => setActive(track)
  const playlistProps = {
    handleSetActive,
    variant: 'red',
    active,
    data,
  }

  function PrintVideos() {
    if (video.constructor === Array) return video.map((video, index) => <Video key={'video' + index} {...video} />)
    return <Video {...video} />
  }

  return (
    <Page head={head}>
      <Split>
        <div>{children}</div>
        <Playlist {...playlistProps} />
      </Split>
      {video && (
        <div className="margin-top-4">
          <PrintVideos />
        </div>
      )}
    </Page>
  )
}
