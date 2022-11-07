import styles from 'styles/components/layouts/demos.module.scss'
import { Split, Video } from 'components'
import Page from 'components/page/demos'
import { Playlist } from 'components/ui'
import { useState } from 'react'

export default function DemosLayout({ head, data, children, video }) {
  const [active, setActive] = useState(data.main)
  const handleSetActive = (track) => setActive(track)
  const variant = 'red'
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
    <Page head={head}>
      <Split>
        <div className={styles.copy}>{children}</div>
        <Playlist {...playlistProps} />
      </Split>
      {video && (
        <div className={styles.video}>
          <PrintVideos />
        </div>
      )}
    </Page>
  )
}
