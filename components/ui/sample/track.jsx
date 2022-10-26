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

  function printTitle() {
    const titles = track.title
    if (!Array.isArray(titles)) return titles

    return titles.map((title, index) => {
      const last = index === titles.length - 1
      return (
        <div key={'title' + index}>
          {title}
          {!last && ','}
        </div>
      )
    })
  }

  const linkProps = {
    className: styles.download,
    href: track.src,
    download: true,
  }

  return (
    <div className={containerClasses}>
      <div className={styles.media} style={{ backgroundImage }}>
        <Button {...buttonProps} />
      </div>
      <div className={styles.title_wrap}>
        <a {...linkProps}>
          <MdOutlineFileDownload className={styles.icon} />
        </a>
        <div className={styles.title}>{printTitle()}</div>
      </div>
      <div className={styles.genre}>{track.genre}</div>
    </div>
  )
}
