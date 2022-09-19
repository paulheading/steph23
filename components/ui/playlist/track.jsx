import { TrackPaused, TrackPlaying } from 'icons'
import styles from 'styles/components/ui/playlist/track.module.scss'
import { attachVariant } from 'scripts'

export function Track({ track, handleTrackChange, activePlaylist, active, variant, isOpen }) {
  if (!track) return

  const activeTrack = activePlaylist && track.id === active.id
  const activeStyles = activeTrack ? styles.active : ''
  const containerClasses = `${styles.container} ${attachVariant(variant, styles)} ${activeStyles}`
  const statusIcon = activeTrack && active.playing ? <TrackPlaying /> : <TrackPaused />

  if (!isOpen) return

  return (
    <button className={containerClasses} onClick={() => handleTrackChange(track)}>
      {statusIcon}
      {track.title}
    </button>
  )
}
