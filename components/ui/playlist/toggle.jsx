import { MdClose } from 'react-icons/md'
import styles from 'styles/components/ui/playlist/toggle.module.scss'

export function Toggle({ playlist, isOpen, handleSetOpenID }) {
  if (!playlist) return
  const openClass = isOpen ? styles.open : ''
  const MdCloseClasses = `${styles.MdClose} ${openClass}`

  return (
    <button className={styles.container} onClick={() => handleSetOpenID(playlist.id)}>
      {playlist.title}
      <MdClose className={MdCloseClasses} />
    </button>
  )
}
