import { useState } from 'react'
import { intro } from 'data/playlist'
import { Head, Player } from 'components'

export default function UI_Player() {
  const [active, setActive] = useState(intro[0])
  const handleSetActive = (track) => setActive(track)
  const playerProps = {
    data: active,
    handleSetActive,
    active,
  }

  return (
    <div>
      <Head />
      <Player {...playerProps} />
    </div>
  )
}
