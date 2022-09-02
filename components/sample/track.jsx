import { useRef } from 'react'
import styles from 'styles/components/sample/track.module.scss'
import { FaPlay, FaPause } from 'react-icons/fa'
import { attachVariant } from 'scripts'

export function Track({ track, handleTrackChange, activePlaylist, active, variant, playerRef, handleSetActive }) {
  if (!track) return null
  const svgRef = useRef(null)
  const activeTrack = activePlaylist && track.id === active.id
  const activeStyles = activeTrack ? styles.active : ''
  const containerClasses = `${styles.container} ${attachVariant(variant, styles)} ${activeStyles}`
  const backgroundImage = `url(${track.cover})`
  const strokeDasharray = 600
  const strokeDashoffset = activeTrack ? active.progress * 6 : 0
  const svgAttributes = {
    fill: 'none',
    strokeWidth: '12',
  }

  function buttonContent() {
    if (!activeTrack) return <FaPlay className={styles.fa_play} />
    return active.playing ? <FaPause className={styles.fa_pause} /> : <FaPlay className={styles.fa_play} />
  }

  function updateTrack(event) {
    if (!svgRef.current || !activeTrack) return
    const element = svgRef.current.getBoundingClientRect()
    const { clientX, clientY } = event
    const { width, height, left, top, bottom } = element
    const halfWidth = width * 0.5
    const halfway = left + halfWidth
    let progress = 0
    if (clientX < halfway) {
      progress = bottom - clientY
      progress = (progress / height) * 50
      progress = progress + 50
    } else {
      progress = clientY - top
      progress = (progress / height) * 50
    }
    handleSetActive({ ...active, progress })
    playerRef.current.currentTime = progress
    svgRef.current.style.strokeDashoffset = `${progress}%`
  }

  return (
    <div className={containerClasses}>
      <div className={styles.media} style={{ backgroundImage }}>
        <button className={styles.play_button} onClick={() => handleTrackChange(track)}>
          {buttonContent()}
        </button>
        <svg className={styles.svg} onClick={updateTrack} width="58" viewBox="0 0 202 202">
          <path className={styles.progress} d="M196,101c0,52.5-42.5,95-95,95S6,153.5,6,101	S48.5,6,101,6S196,48.5,196,101z" {...svgAttributes} />
          <path className={styles.bar} ref={svgRef} style={{ strokeDashoffset, strokeDasharray }} d="M101,6C48.5,6,6,48.5,6,101s42.5,95,95,95	s95-42.5,95-95S153.5,6,101,6z" {...svgAttributes} />
        </svg>
      </div>
      <div className={styles.title}>{track.title}</div>
      <div className={styles.genre}>{track.genre}</div>
    </div>
  )
}
