import styles from 'styles/components/video.module.scss'

export function Video({ id, src, title, className }) {
  const customClass = className ? className : ''
  const customID = { id: id ? id : null }
  const containerClass = `${styles.container} ${customClass}`
  const props = {
    src: `https://player.vimeo.com/video/${src}&amp;badge=0&amp;autopause=1&amp;player_id=0&amp;app_id=58479`,
    allow: 'fullscreen',
    frameBorder: '0',
    width: '1280',
    height: '720',
    title,
  }

  return (
    <div {...customID} className={containerClass}>
      <iframe {...props} />
    </div>
  )
}
