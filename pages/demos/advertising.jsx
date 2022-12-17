import layout from 'styles/components/layouts/demos.module.scss'
import styles from 'styles/pages/demos.module.scss'
import { advertising as data } from 'data/demos'
import { Split, Title, Video } from 'components'
import { attachVariant, studio } from 'scripts'
import { useEffect, useState } from 'react'
import Page from 'components/page/demos'
import { Playlist } from 'components/ui'
import { demos } from 'data/seo'

export default function Advertising() {
  const [active, setActive] = useState(data.main)
  const handleSetActive = (track) => setActive(track)
  const { videos } = data
  const variant = 'red'
  const playlistProps = {
    handleSetActive,
    variant,
    active,
    data,
  }

  const captionStyles = `${styles.caption} ${attachVariant(variant, styles)}`

  const titleProps = {
    className: captionStyles,
    margin: false,
    small: true,
  }

  const PrintVideos = () =>
    videos.map((video, index) => {
      const id = 'video' + index
      const { caption } = video

      useEffect(() => {
        const { wiggle } = studio
        wiggle({ target: '#video' + index })
      }, [])

      const containerProps = {
        className: layout.video,
        key: 'video' + index,
      }

      const videoProps = {
        ...video,
        id,
      }

      return (
        <div {...containerProps}>
          <Video {...videoProps} />
          <div className={layout.caption}>
            <Title {...titleProps}>{caption}</Title>
          </div>
        </div>
      )
    })

  return (
    <Page head={demos.advertising}>
      <Split>
        <div className={layout.copy}>
          <Title>Advertising</Title>
          <p>Whether you need a conversational US/transatlantic voice, impeccable comic timing or skillful character accents, I will make your commercial shine above the rest.</p>
          <p>I am passionate about making brands accessible and exciting, using heaps of creativity to bring life and colour to any script. I combine this with quick turnarounds, excellent communication and a top quality studio sound, to guarantee you will keep coming back for more.</p>
          <p>Get in touch and give your brand that extra spark!</p>
        </div>
        <Playlist {...playlistProps} />
      </Split>
      <PrintVideos />
    </Page>
  )
}
