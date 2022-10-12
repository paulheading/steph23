import { useState } from 'react'
import { homepage } from 'data/playlist'
import { Head } from 'components'
import { Player } from 'components/ui'
import styles from 'styles/ui.module.scss'

export default function UI_Players() {
  const [active, setActive] = useState(homepage[0])
  const handleSetActive = (track) => setActive(track)
  const playerProps = {
    handleSetActive,
    active,
  }

  function setStandalone(key) {
    switch (key) {
      case 0:
        return false
      default:
        return true
    }
  }

  function setVariant(key) {
    switch (key) {
      case 0:
        return 'red'
      case 2:
        return 'yellow'
      default:
        return 'green'
    }
  }

  function setDark(key) {
    switch (key) {
      case 2:
        return true
      default:
        return false
    }
  }

  return (
    <div>
      <Head />
      <div className={styles.grid}>
        {homepage.map((track, index) => (
          <Player key={`player${index}`} data={track} {...playerProps} standalone={setStandalone(index)} variant={setVariant(index)} dark={setDark(index)} />
        ))}
      </div>
    </div>
  )
}
