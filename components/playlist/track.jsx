import { TrackPaused, TrackPlaying } from 'icons'
import styles from 'styles/components/playlist/track.module.scss'
import { attachVariant } from 'scripts'

export function Track({ track, handleTrackChange, activePlaylist, active, variant, toggleData }) {
  if (!track) return null
  const activeTrack = activePlaylist && track.id === active.id
  const activeStyles = activeTrack ? styles.active : ''
  const containerClasses = `${styles.container} ${attachVariant(variant, styles)} ${activeStyles}`
  const statusIcon = activeTrack && active.playing ? <TrackPlaying /> : <TrackPaused />

  function handleToggleData() {
    if (!toggleData) return
    return toggleData()
  }

  return (
    <button data={handleToggleData()} className={containerClasses} onClick={() => handleTrackChange(track)}>
      {statusIcon}
      {track.title}
    </button>
  )
}
