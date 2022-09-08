import { useRef } from 'react'
import styles from 'styles/components/ui/playlist/main.module.scss'
import { MdOutlineFileDownload } from 'react-icons/md'
import { attachVariant } from 'scripts'
import { Button } from 'components/ui/playlist/button'

export function Main({ activePlaylist, playerRef, active, handleSetActive, main, variant, toggleData, playlist = false, dark = false }) {
  const barRef = useRef(null)
  const progressRef = useRef(null)
  const darkClass = dark ? styles.dark : ''
  const containerClasses = `${styles.container} ${attachVariant(variant, styles)} ${darkClass}`

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

  function handleToggleData() {
    if (!toggleData) return
    return toggleData()
  }

  const buttonProps = {
    onClick: () => togglePlay(),
    className: styles.button,
    playing: active.playing,
    active: activePlaylist,
    playlist,
    variant,
    dark,
  }

  return (
    <div data={handleToggleData()} className={containerClasses}>
      <div className={styles.wrap}>
        <Button {...buttonProps} />
        <div>
          <div className={styles.title}>{activePlaylist ? active.title : main.title}</div>
          <button ref={barRef} className={styles.bar} onClick={updateProgress}>
            <div ref={progressRef} style={styleWidth()} className={styles.progress}></div>
          </button>
        </div>
        <a href={activePlaylist ? active.src : main.src} download>
          <MdOutlineFileDownload className={styles.download} />
        </a>
      </div>
    </div>
  )
}
