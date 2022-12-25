import styles from 'styles/components/ui/sample/track.module.scss'
import { Button } from 'components/ui/playlist/button'
import { attachVariant } from 'scripts'
import { MdOutlineFileDownload } from 'react-icons/md'
import { useEffect } from 'react'
import { studio } from 'scripts'

export function Track({ track, handleTrackChange, activePlaylist, active, variant, dark = false, animate }) {
  if (!track) return null
  const activeTrack = activePlaylist && track.id === active.id
  const activeStyles = activeTrack ? styles.active : ''
  const darkClass = dark ? styles.dark : ''
  const animateClass = animate ? animate : null
  const containerClasses = `${styles.container} ${attachVariant(variant, styles)} ${activeStyles} ${darkClass} ${animateClass}`
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

  useEffect(() => {
    if (!animate) return
    const { wiggle } = studio
    wiggle({ target: `.${animate}` })
  }, [animate])

  return (
    <div className={containerClasses}>
      <div className={styles.media} style={{ backgroundImage }}>
        <Button {...buttonProps} />
      </div>
      <div className={styles.title_wrap}>
        <a {...linkProps}>
          <MdOutlineFileDownload className={styles.MdOutlineFileDownload} />
        </a>
        <div className={styles.title}>{printTitle()}</div>
      </div>
      <div className={styles.genre}>{track.genre}</div>
    </div>
  )
}
