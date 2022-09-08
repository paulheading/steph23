import { useEffect, useRef, useState } from 'react'
import styles from 'styles/components/ui/sample.module.scss'
import { attachVariant } from 'scripts'
import { Track } from 'components/ui/sample/track'
import { Group } from 'components/ui/sample/group'

export function Sample({ data, active, handleSetActive, variant, openID, series, dark = false }) {
  const [playlist, setPlaylist] = useState(data)
  const playerRef = useRef(null)
  const isOpen = openID === playlist.id
  const activePlaylist = playlist.id === active.playlist_id
  const containerClasses = `${styles.container} ${attachVariant(variant, styles)}`
  const toggleData = () => (!isOpen ? 'toggle-closed' : 'toggle-open')

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

  function handleTrackChange(track) {
    if (activePlaylist && active.id === track.id) {
      handleSetActive({ ...active, playing: !active.playing })
    } else {
      handleSetActive({ ...active, playing: false })
      setPlaylist({ ...playlist, main: { ...track, playing: true } })
      handleSetActive({ ...track, playing: true })
    }
  }

  const trackProps = {
    handleTrackChange,
    handleSetActive,
    activePlaylist,
    toggleData,
    playerRef,
    variant,
    active,
    isOpen,
    dark,
  }

  const mapTracks = (tracks) =>
    tracks.map((track, index) => {
      const props = {
        key: `track${index}`,
        ...trackProps,
        track,
      }
      return <Track {...props} />
    })

  const groupProps = {
    groups: playlist.groups,
    trackProps,
  }

  return (
    <div data={toggleData()} className={containerClasses}>
      <audio ref={playerRef} src={active.src} onTimeUpdate={updateProgress}></audio>
      {!series ? mapTracks(playlist.tracks) : <Group {...groupProps} />}
    </div>
  )
}
