import styles from 'styles/components/video.module.scss'

export function VideoLocal({ id, src, className }) {
  const customClass = className ? className : ''
  const customID = { id: id ? id : null }
  const containerClass = `${styles.container} ${customClass}`

  const props = {
    controls: true,
    height: '720',
    width: '1280',
  }

  return (
    <div {...customID} className={containerClass}>
      <video {...props}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}
