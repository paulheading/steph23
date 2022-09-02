import { useEffect, useRef, useState } from 'react'
import styles from 'styles/components/player.module.scss'
import { Main } from 'components/playlist/main'
import { attachVariant } from 'scripts'

export function Player({ data, active, handleSetActive, variant, standalone, invert }) {
  const [playlist, setPlaylist] = useState(data)
  const playerRef = useRef(null)
  const activePlaylist = playlist.id === active.id
  const invertClass = invert ? styles.invert : ''
  const variantClass = attachVariant(variant, styles)
  const containerClasses = `${styles.container} ${variantClass} ${invertClass}`

  useEffect(() => {
    if (!activePlaylist) return
    active.playing ? playerRef.current.play() : playerRef.current.pause()
  }, [active])

  function updateProgress() {
    if (!playerRef.current) return
    const duration = playerRef.current.duration
    const time = playerRef.current.currentTime
    const progress = (time / duration) * 100
    if (isNaN(progress)) return
    if (progress === 100) handleSetActive({ ...active, progress: 0, playing: false })
    else handleSetActive({ ...active, progress, duration })
  }

  const mainProps = {
    main: playlist,
    handleSetActive,
    activePlaylist,
    standalone,
    playerRef,
    variant,
    active,
    invert,
  }

  return (
    <div className={containerClasses}>
      <audio ref={playerRef} src={active.src} onTimeUpdate={updateProgress}></audio>
      <Main {...mainProps} />
    </div>
  )
}
