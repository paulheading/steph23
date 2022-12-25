import { Fragment, useEffect, useRef, useState } from 'react'
import { Track } from 'components/ui/sample/track'
import { Group } from 'components/ui/sample/group'

export function Sample({ data, active, handleSetActive, variant, openID, series, dark = false, animate }) {
  const [playlist, setPlaylist] = useState(data)
  const playerRef = useRef(null)
  const isOpen = openID === playlist.id
  const activePlaylist = playlist.id === active.playlist_id

  useEffect(() => {
    if (!activePlaylist) return
    if (!playerRef.current) return
    active.playing ? playerRef.current.play() : playerRef.current.pause()
  }, [active, playerRef, activePlaylist])

  function updateProgress() {
    if (!playerRef.current) return
    const { current } = playerRef
    const { duration, currentTime } = current
    const progress = (currentTime / duration) * 100
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
    playerRef,
    variant,
    animate,
    active,
    isOpen,
    dark,
  }

  const mapTracks = (tracks) =>
    tracks.map((track, index) => {
      const props = {
        ...trackProps,
        track,
      }
      return <Track key={'track' + index} {...props} />
    })

  const groupProps = {
    groups: playlist.groups,
    trackProps,
  }

  if (!isOpen) return

  return (
    <Fragment>
      <div>
        <audio ref={playerRef} src={active.src} onTimeUpdate={updateProgress}></audio>
        {!series ? mapTracks(playlist.tracks) : <Group {...groupProps} />}
      </div>
    </Fragment>
  )
}
