import styles from 'styles/components/video.module.scss'

export function VideoLocal({ id, src, className }) {
  const customClass = className ? className : ''
  const customID = { id: id ? id : null }
  const containerClass = `${styles.container} ${customClass}`

  const videoProps = {
    controlsList: 'nodownload',
    controls: true,
    height: '720',
    width: '1280',
  }

  const sourceProps = {
    type: 'video/mp4',
    src,
  }

  return (
    <div {...customID} className={containerClass}>
      <video {...videoProps}>
        <source {...sourceProps} />
      </video>
    </div>
  )
}
