import { useEffect, useRef, useState } from 'react'
import styles from 'styles/components/ui/playlist.module.scss'
import { attachVariant } from 'scripts'
import { Main } from 'components/ui/playlist/main'
import { Track } from 'components/ui/playlist/track'
import { Toggle } from 'components/ui/playlist/toggle'

export function Playlist({ data, active, handleSetActive, variant, toggle, openID, handleSetOpenID, className }) {
  const [playlist, setPlaylist] = useState(data)
  const playerRef = useRef(null)
  const isOpen = toggle ? openID === playlist.id : true
  const activePlaylist = active ? playlist.id === active.playlist_id : false
  const customClass = className ? className : ''
  const containerClasses = `${styles.container} ${attachVariant(variant, styles)} ${customClass}`

  console.log('playlist: ', data)

  useEffect(() => {
    if (!activePlaylist || !playerRef) return
    console.log('player ref: ', playerRef.current)
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

  const stateProps = {
    activePlaylist,
    variant,
    active,
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
    toggle,
  }

  const toggleProps = {
    handleSetOpenID,
    playlist,
    variant,
    isOpen,
  }

  const audioProps = {
    src: active && active.src,
    ref: playerRef,
    onTimeUpdate,
  }

  function Tracks(track, index) {
    const props = {
      ...trackProps,
      track,
    }
    return <Track key={'track' + index} {...props} />
  }

  return (
    <div className={containerClasses}>
      <audio {...audioProps}></audio>
      {toggle && <Toggle {...toggleProps} />}
      <Main {...mainProps} />
      {playlist.tracks.map(Tracks)}
    </div>
  )
}
