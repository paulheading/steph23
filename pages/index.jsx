import { useState } from 'react'
import { eLearning, advertising } from 'data/playlist'
import { Head, Playlist } from 'components'
import styles from 'styles/ui.module.scss'

export default function Home() {
  const [active, setActive] = useState(eLearning.main)
  const handleSetActive = (track) => setActive(track)
  const playlistProps = {
    handleSetActive,
    active,
  }

  return (
    <div>
      <Head />
      <div className={styles.grid}>
        <Playlist data={eLearning} {...playlistProps} />
        <Playlist data={advertising} {...playlistProps} />
      </div>
    </div>
  )
}
