import { useState } from 'react'
import { eLearning } from 'data/demos'
import { Head } from 'components'
import { Playlist } from 'components/ui'

export default function UI_Playlist() {
  const [active, setActive] = useState(eLearning.main)
  const handleSetActive = (track) => setActive(track)
  const playlistProps = {
    data: eLearning,
    handleSetActive,
    variant: 'red',
    active,
  }

  return (
    <div>
      <Head />
      <Playlist {...playlistProps} />
    </div>
  )
}
