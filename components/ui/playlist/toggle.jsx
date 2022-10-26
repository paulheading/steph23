import { MdClose } from 'react-icons/md'
import styles from 'styles/components/ui/playlist/toggle.module.scss'

export function Toggle({ playlist, isOpen, handleSetOpenID }) {
  if (!playlist) return
  const openClass = isOpen ? styles.open : ''
  const MdCloseClasses = `${styles.MdClose} ${openClass}`

  function toggleOpen() {
    const ID = !isOpen ? playlist.id : null
    handleSetOpenID(ID)
  }

  return (
    <button className={styles.container} onClick={toggleOpen}>
      <span className={styles.title}>{playlist.title}</span>
      <MdClose className={MdCloseClasses} />
    </button>
  )
}
