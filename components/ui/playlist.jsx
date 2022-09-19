import { useEffect, useRef, useState } from 'react'
import styles from 'styles/components/ui/playlist.module.scss'
import { attachVariant } from 'scripts'
import { Main } from 'components/ui/playlist/main'
import { Track } from 'components/ui/playlist/track'
import { Toggle } from 'components/ui/playlist/toggle'

export function Playlist({ data, active, handleSetActive, variant, toggle, openID, handleSetOpenID }) {
  const [playlist, setPlaylist] = useState(data)
  const playerRef = useRef(null)
  const isOpen = openID === playlist.id
  const activePlaylist = active ? playlist.id === active.playlist_id : null
  const containerClasses = `${styles.container} ${attachVariant(variant, styles)}`

  useEffect(() => {
    if (!activePlaylist) return
    active.playing ? playerRef.current.play() : playerRef.current.pause()
  }, [active, activePlaylist])

  function updateProgress() {
    if (!playerRef.current) return
    const { current } = playerRef
    const { duration, currentTime } = current
    const progress = (currentTime / duration) * 100

    if (isNaN(progress)) return
    if (progress === 100) handleSetActive({ ...active, progress: 0, playing: false })
    else handleSetActive({ ...active, progress, duration })
  }

  const stateProps = {
    activePlaylist,
    variant,
    active,
    toggle,
    isOpen,
  }

  const mainProps = {
    main: playlist.main,
    handleSetActive,
    playlist: true,
    ...stateProps,
    playerRef,
  }

  function handleTrackChange(track) {
    if (activePlaylist && active.id === track.id) return handleSetActive({ ...active, playing: !active.playing })
    handleSetActive({ ...active, playing: false })
    setPlaylist({ ...playlist, main: { ...track, playing: true } })
    handleSetActive({ ...track, playing: true })
  }

  const trackProps = {
    handleTrackChange,
    ...stateProps,
  }

  const toggleProps = {
    handleSetOpenID,
    playlist,
    isOpen,
  }

  return (
    <div className={containerClasses}>
      <audio ref={playerRef} src={active ? active.src : null} onTimeUpdate={updateProgress}></audio>
      {toggle && <Toggle {...toggleProps} />}
      <Main {...mainProps} />
      {playlist.tracks.map((track, index) => {
        const props = {
          ...trackProps,
          track,
        }
        return <Track key={'track' + index} {...props} />
      })}
      <Track />
    </div>
  )
}
