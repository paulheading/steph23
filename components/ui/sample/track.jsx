import styles from 'styles/components/ui/sample/track.module.scss'
import { Button } from 'components/ui/playlist/button'
import { attachVariant } from 'scripts'
import { MdOutlineFileDownload } from 'react-icons/md'
import { useEffect, useRef } from 'react'
import { studio } from 'scripts'

export function Track({ track, handleTrackChange, activePlaylist, active, variant, dark = false, animate = false }) {
  const containerRef = useRef(null)
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

  const containerProps = {
    className: containerClasses,
    ref: containerRef,
  }

  useEffect(() => {
    if (!containerRef || !animate) return
    const { wiggle } = studio
    wiggle({ target: containerRef.current })
  }, [containerRef, animate])

  return (
    <div {...containerProps}>
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
