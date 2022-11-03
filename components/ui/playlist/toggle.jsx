import { MdClose } from 'react-icons/md'
import { attachVariant } from 'scripts'
import styles from 'styles/components/ui/playlist/toggle.module.scss'

export function Toggle({ playlist, isOpen, handleSetOpenID, variant }) {
  if (!playlist) return
  const openClass = isOpen ? styles.open : ''
  const MdCloseClasses = `${styles.MdClose} ${openClass}`
  const containerClasses = `${styles.container} ${attachVariant(variant, styles)}`

  const containerProps = {
    className: containerClasses,
    onClick: toggleOpen,
  }

  function toggleOpen() {
    const ID = !isOpen ? playlist.id : null
    handleSetOpenID(ID)
  }

  return (
    <button {...containerProps}>
      <span className={styles.title}>{playlist.title}</span>
      <MdClose className={MdCloseClasses} />
    </button>
  )
}
