import styles from 'styles/components/ui/playlist/button.module.scss'
import { FaPlay, FaPause } from 'react-icons/fa'
import { attachVariant } from 'scripts'

export function Button({ active, playing, onClick, className, variant, dark = false, playlist = false }) {
  const hasClass = className ? className : ''
  const darkClass = dark ? styles.dark : ''
  const playlistClass = playlist ? styles.playlist : ''
  const buttonClasses = `${styles.button} ${hasClass} ${attachVariant(variant, styles)} ${darkClass} ${playlistClass}`
  const props = {
    className: buttonClasses,
    onClick,
  }
  function content() {
    if (!active) return <FaPlay className={styles.fa_play} />
    return playing ? <FaPause className={styles.fa_pause} /> : <FaPlay className={styles.fa_play} />
  }

  return <button {...props}>{content()}</button>
}
