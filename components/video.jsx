import styles from 'styles/components/video.module.scss'

export function Video({ id, src, title, className }) {
  const customClass = className ? className : ''
  const customID = { id: id ? id : null }
  const containerClass = `${styles.container} ${customClass}`
  const props = {
    allow: 'fullscreen',
    frameBorder: '0',
    height: '720',
    width: '1280',
    title,
    src,
  }

  return (
    <div {...customID} className={containerClass}>
      <iframe {...props} />
    </div>
  )
}
