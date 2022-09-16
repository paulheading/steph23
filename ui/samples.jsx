import { useState } from 'react'
import { series } from 'data/audiobooks'
import { playlists } from 'data/demos'
import { Samples } from 'components/ui'

export default function UI_Samples() {
  const [active, setActive] = useState(eLearning.main)
  const props = {
    data: [...playlists, series],
    setActive,
    active,
  }
  return <Samples {...props} />
}
