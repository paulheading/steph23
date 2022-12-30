import styles from 'styles/components/layouts/demos.module.scss'
import { studio, attachVariant } from 'scripts'
import { useState, useEffect } from 'react'
import { Split, Video } from 'components'
import Page from 'components/page/demos'
import { Playlist } from 'components/ui'
import { Title } from 'components'

export default function DemosLayout({ head, data, children }) {
  const [active, setActive] = useState(data.main)
  const handleSetActive = (track) => setActive(track)
  const variant = 'red'
  const playlistProps = {
    handleSetActive,
    variant,
    active,
    data,
  }
  const { videos } = data

  // useEffect(() => {
  //   if (!videos) return
  //   if (videos.length > 1) {
  //     videos.map((_, index) => {
  //       const { wiggle } = studio
  //       wiggle({ target: '#video' + index })
  //     })
  //   } else {
  //     const { wiggle } = studio
  //     wiggle({ target: '#video' })
  //   }
  // }, [videos])

  const MultipleVideos = () => (
    <div className={styles.video}>
      {videos.map((video, index) => {
        const key = 'video' + index
        return <SingleVideo key={key} id={key} {...video} />
      })}
    </div>
  )

  function SingleVideo(video, id) {
    const captionStyles = `${styles.caption} ${attachVariant(variant, styles)}`

    const titleProps = {
      className: captionStyles,
      margin: false,
      small: true,
    }

    return (
      <div className={styles.wrap_video}>
        <Video id={id} {...video} />
        <div className={styles.wrap_caption}>
          <Title {...titleProps}>{video.caption}</Title>
        </div>
      </div>
    )
  }

  function CheckVideos() {
    if (!videos) return
    if (videos.length > 1) return <MultipleVideos />
    return <SingleVideo id="video" {...videos[0]} />
  }

  return (
    <Page head={head}>
      <Split>
        <div className={styles.copy}>{children}</div>
        <Playlist {...playlistProps} />
      </Split>
      <CheckVideos />
    </Page>
  )
}
