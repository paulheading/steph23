import { useState } from 'react'
import { Track } from 'components/sample/track'
import { attachVariant } from 'scripts'
import styles from 'styles/components/sample/group.module.scss'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

export function Group({ groups, trackProps }) {
  const [group, setGroup] = useState(groups[0])
  const { variant, active, handleSetActive } = trackProps
  const { length } = groups

  const containerClasses = `${styles.container} ${attachVariant(variant, styles)}`

  function handleSetGroup(id) {
    handleSetActive({ ...active, playing: false })
    const group = groups.filter((group) => group.id === id)[0]
    setGroup(group)
  }

  function prevGroupID() {
    if (group.id === 0) handleSetGroup(length - 1)
    else handleSetGroup(group.id - 1)
  }

  function nextGroupID() {
    if (group.id === length - 1) handleSetGroup(0)
    else handleSetGroup(group.id + 1)
  }

  return (
    <div className={containerClasses}>
      <div className={styles.author_container}>
        <button className={styles.prev_button} onClick={prevGroupID}>
          <MdArrowBack />
        </button>
        <div className={styles.author}>{group.author}</div>
        <button className={styles.next_button} onClick={nextGroupID}>
          <MdArrowForward />
        </button>
      </div>
      <div className={styles.track_container}>
        {group.tracks.map((track, index) => (
          <Track key={`track${index}`} track={track} {...trackProps} />
        ))}
      </div>
    </div>
  )
}
