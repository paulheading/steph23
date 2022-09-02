import { useEffect, useRef, useState } from 'react'
import styles from 'styles/components/playlist.module.scss'
import { attachVariant } from 'scripts'
import { Main } from 'components/playlist/main'
import { Track } from 'components/playlist/track'
import { Toggle } from 'components/playlist/toggle'

export function Playlist({ data, active, handleSetActive, variant, toggle, openID, handleSetOpenID }) {
  const [playlist, setPlaylist] = useState(data)
  const playerRef = useRef(null)
  const isOpen = openID === playlist.id
  const activePlaylist = playlist.id === active.playlist_id
  const containerClasses = `${styles.container} ${attachVariant(variant, styles)}`

  function toggleData() {
    if (!toggle) return ''
    return !isOpen ? 'toggle-closed' : 'toggle-open'
  }

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
    main: playlist.main,
    handleSetActive,
    activePlaylist,
    toggleData,
    playerRef,
    variant,
    active,
    toggle,
  }

  function handleTrackChange(track) {
    if (activePlaylist && active.id === track.id) return handleSetActive({ ...active, playing: !active.playing })
    handleSetActive({ ...active, playing: false })
    setPlaylist({ ...playlist, main: { ...track, playing: true } })
    handleSetActive({ ...track, playing: true })
  }

  const trackProps = {
    handleTrackChange,
    activePlaylist,
    toggleData,
    variant,
    active,
    toggle,
    isOpen,
  }

  const toggleProps = {
    handleSetOpenID,
    playlist,
    isOpen,
  }

  return (
    <div className={containerClasses}>
      <audio ref={playerRef} src={active.src} onTimeUpdate={updateProgress}></audio>
      {toggle && <Toggle {...toggleProps} />}
      <Main {...mainProps} />
      {playlist.tracks.map((track, index) => (
        <Track key={`track${index}`} track={track} {...trackProps} />
      ))}
      <Track />
    </div>
  )
}
