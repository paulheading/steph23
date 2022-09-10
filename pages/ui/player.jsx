import { useState } from 'react'
import { intro } from 'data/playlist'
import { Head } from 'components'
import { Player } from 'components/ui'

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
