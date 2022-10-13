import styles from 'styles/components/video.module.scss'

export function Video({ src, title, className }) {
  const customClass = className ? className : ''
  const containerClass = `${styles.container} ${customClass}`
  const props = {
    src: `https://player.vimeo.com/video/${src}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`,
    allow: 'autoplay; fullscreen; picture-in-picture',
    allowfullscreen: true,
    frameborder: '0',
    width: '1280',
    height: '720',
    title,
  }

  return (
    <div className={containerClass}>
      <iframe {...props} />
    </div>
  )
}
