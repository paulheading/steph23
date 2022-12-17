import styles from 'styles/components/layouts/demos.module.scss'
import { useState, useEffect } from 'react'
import { Split, Video } from 'components'
import Page from 'components/page/demos'
import { Playlist } from 'components/ui'
import { studio } from 'scripts'

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

  function MultipleVideos() {
    video.map((video, index) => {
      const id = 'video' + index

      useEffect(() => {
        const { wiggle } = studio
        wiggle({ target: '#video' + index })
      }, [])

      const containerProps = {
        key: 'video' + index,
      }

      const videoProps = {
        ...video,
        id,
      }

      return (
        <div {...containerProps}>
          <Video {...videoProps} />
        </div>
      )
    })
  }

  function SingleVideo() {
    useEffect(() => {
      const { wiggle } = studio
      wiggle({ target: '#video' })
    }, [])

    return (
      <div>
        <Video {...video} id="video" />
      </div>
    )
  }

  return (
    <Page head={head}>
      <Split>
        <div className={styles.copy}>{children}</div>
        <Playlist {...playlistProps} />
      </Split>
      {video && <div className={styles.video}>{video.constructor === Array ? <MultipleVideos /> : <SingleVideo />}</div>}
    </Page>
  )
}
