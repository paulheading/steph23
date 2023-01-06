import { forwardRef, useEffect, useRef, useState } from 'react'
import styles from 'styles/components/ui/player.module.scss'
import { Main } from 'components/ui/playlist/main'
import { attachVariant } from 'scripts'

const Player = forwardRef(({ data, active, handleSetActive, variant, standalone, dark, className }, ref) => {
  const [playlist, setPlaylist] = useState(data)
  const playerRef = useRef(null)
  const activePlaylist = playlist.id === active.id
  const darkClass = dark ? styles.dark : ''
  const customClass = className ? className : ''
  const variantClass = attachVariant(variant, styles)
  const containerClasses = `${styles.container} ${variantClass} ${darkClass} ${customClass}`

  useEffect(() => {
    if (!activePlaylist) return
    active.playing ? playerRef.current.play() : playerRef.current.pause()
  }, [active, activePlaylist])

  function onTimeUpdate() {
    if (!playerRef.current) return
    const duration = playerRef.current.duration
    const time = playerRef.current.currentTime
    const progress = (time / duration) * 100
    if (isNaN(progress)) return
    if (progress === 100) handleSetActive({ ...active, progress: 0, playing: false })
    else handleSetActive({ ...active, progress, duration })
  }

  const containerProps = {
    className: containerClasses,
    ref,
  }

  const audioProps = {
    src: active.src,
    ref: playerRef,
    onTimeUpdate,
  }

  const mainProps = {
    handleSetActive,
    main: playlist,
    activePlaylist,
    standalone,
    playerRef,
    variant,
    active,
    dark,
  }

  return (
    <div {...containerProps}>
      <audio {...audioProps} />
      <Main {...mainProps} />
    </div>
  )
})

Player.displayName = 'Player'

export { Player }
