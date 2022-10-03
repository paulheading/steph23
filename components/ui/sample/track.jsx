import styles from 'styles/components/ui/sample/track.module.scss'
import { Button } from 'components/ui/playlist/button'
import { attachVariant } from 'scripts'
import { MdOutlineFileDownload } from 'react-icons/md'

export function Track({ track, handleTrackChange, activePlaylist, active, variant, dark = false }) {
  if (!track) return null
  const activeTrack = activePlaylist && track.id === active.id
  const activeStyles = activeTrack ? styles.active : ''
  const darkClass = dark ? styles.dark : ''
  const containerClasses = `${styles.container} ${attachVariant(variant, styles)} ${activeStyles} ${darkClass}`
  const backgroundImage = `url(${track.cover})`

  const buttonProps = {
    onClick: () => handleTrackChange(track),
    className: styles.button,
    playing: active.playing,
    active: activeTrack,
    variant,
  }

  return (
    <div className={containerClasses}>
      <div className={styles.media} style={{ backgroundImage }}>
        <Button {...buttonProps} />
      </div>
      {track.favourite ? (
        <a className={styles.title} href={track.src} download>
          {track.title}
          <MdOutlineFileDownload className={styles.download} />
        </a>
      ) : (
        <div className={styles.title}>{track.title}</div>
      )}
      <div className={styles.genre}>{track.genre}</div>
    </div>
  )
}
