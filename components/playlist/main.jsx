import { useRef } from 'react'
import styles from 'styles/components/playlist/main.module.scss'
import { FaPlay, FaPause } from 'react-icons/fa'
import { MdOutlineFileDownload } from 'react-icons/md'
import { attachVariant } from 'scripts'

function Main({ activePlaylist, playerRef, active, handleSetActive, main, variant, toggleData, standalone, invert }) {
  const barRef = useRef(null)
  const progressRef = useRef(null)
  const invertClass = invert ? styles.invert : ''
  const standaloneClass = standalone ? styles.standalone : ''
  const containerClasses = `${styles.container} ${attachVariant(variant, styles)} ${standaloneClass} ${invertClass}`

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

  function buttonContent() {
    if (!activePlaylist) return <FaPlay className={styles.fa_play} />
    return active.playing ? <FaPause className={styles.fa_pause} /> : <FaPlay className={styles.fa_play} />
  }

  function handleToggleData() {
    if (!toggleData) return
    return toggleData()
  }

  return (
    <div data={handleToggleData()} className={containerClasses}>
      <div className={styles.wrap}>
        <button className={styles.play_button} onClick={togglePlay}>
          {buttonContent()}
        </button>
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

export { Main }
