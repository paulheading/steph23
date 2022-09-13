import { useState } from 'react'
import { eLearning, advertising, gaming } from 'data/demos'
import { Head } from 'components'
import { Playlist } from 'components/ui'
import styles from 'styles/ui.module.scss'

export default function UI_Playlists() {
  const [active, setActive] = useState(eLearning.main)
  const [openID, setOpenID] = useState(eLearning.id)
  const handleSetActive = (track) => setActive(track)
  function handleSetOpenID(id) {
    setActive({ ...active, playing: false })
    setOpenID(id)
  }
  const playlistProps = {
    handleSetActive,
    handleSetOpenID,
    toggle: true,
    active,
    openID,
  }

  return (
    <div>
      <Head />
      <div className={styles.grid}>
        <Playlist data={eLearning} variant="red" {...playlistProps} />
        <Playlist data={advertising} {...playlistProps} />
        <Playlist data={gaming} {...playlistProps} variant="yellow" />
      </div>
    </div>
  )
}
