import styles from 'styles/components/layouts/demos.module.scss'
import { attachVariant } from 'scripts'
import { useState } from 'react'
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

  function WrapVideo(props) {
    const captionStyles = `${styles.caption} ${attachVariant(variant, styles)}`

    const titleProps = {
      className: captionStyles,
      margin: false,
      small: true,
    }

    return (
      <div className={styles.wrap_video}>
        <Video {...props} />
        <div className={styles.wrap_caption}>
          <Title {...titleProps}>{props.caption}</Title>
        </div>
      </div>
    )
  }

  const CountVideos = () => (videos.length > 1 ? videos.map((props, index) => <WrapVideo key={'video' + index} {...props} />) : <WrapVideo {...videos[0]} />)

  return (
    <Page head={head}>
      <Split>
        <div className={styles.copy}>{children}</div>
        <Playlist {...playlistProps} />
      </Split>
      {videos && <CountVideos />}
    </Page>
  )
}
