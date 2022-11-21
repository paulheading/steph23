import { useRef } from 'react'
import styles from 'styles/components/ui/playlist/main.module.scss'
import { MdOutlineFileDownload } from 'react-icons/md'
import { attachVariant } from 'scripts'
import { Button } from 'components/ui/playlist/button'

export function Main({ activePlaylist, playerRef, active, handleSetActive, main, variant, isOpen = true, playlist = false, dark = false }) {
  const barRef = useRef(null)
  const progressRef = useRef(null)
  const playlistClass = playlist ? styles.playlist : ''
  const darkClass = dark ? styles.dark : ''
  const variantClass = variant ? attachVariant(variant, styles) : ''
  const containerClasses = `${styles.container} ${variantClass} ${playlistClass} ${darkClass}`

  function togglePlay() {
    if (activePlaylist) handleSetActive({ ...active, playing: !active.playing })
    else handleSetActive({ ...main, playing: true })
  }

  function updateProgress(e) {
    if (!playerRef.current || !barRef.current || !progressRef.current) return
    if (!active.playing) return
    const width = barRef.current.clientWidth
    const offset = e.nativeEvent.offsetX
    let progress = (offset / width) * 100
    progress = (progress / 100) * active.duration
    playerRef.current.currentTime = progress
    progressRef.current.style.width = `${progress}%`
    handleSetActive({ ...active, progress })
  }

  function styleWidth() {
    if (!activePlaylist) return
    return { width: `${active.progress}%` }
  }

  const buttonProps = {
    playing: active ? active.playing : null,
    onClick: () => togglePlay(),
    className: styles.button,
    active: activePlaylist,
    playlist,
    variant,
    dark,
  }

  const barProps = {
    onClick: updateProgress,
    className: styles.bar,
    ref: barRef,
  }

  const progressProps = {
    className: styles.progress,
    style: styleWidth(),
    ref: progressRef,
  }

  const linkProps = {
    className: `${styles.link} ${variantClass} ${darkClass}`,
    href: activePlaylist ? active.src : main.src,
    download: true,
  }

  if (!isOpen) return

  return (
    <div className={containerClasses}>
      <div className={styles.wrap}>
        <Button {...buttonProps} />
        <div className={styles.title_wrap}>
          <div className={styles.title}>{activePlaylist ? active.title : main.title}</div>
          <button {...barProps}>
            <div {...progressProps}></div>
          </button>
        </div>
        <a {...linkProps}>
          <MdOutlineFileDownload className={styles.MdOutlineFileDownload} />
        </a>
      </div>
    </div>
  )
}
