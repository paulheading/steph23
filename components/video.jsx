import styles from 'styles/components/video.module.scss'
import { useEffect, useRef } from 'react'
import { studio } from 'scripts'

export function Video({ src, title, className }) {
  const ref = useRef(null)
  const customClass = className ? className : ''
  const containerClass = `${styles.container} ${customClass}`

  const containerProps = {
    className: containerClass,
    ref,
  }

  const iframeProps = {
    src: `https://player.vimeo.com/video/${src}&amp;badge=0&amp;autopause=1&amp;player_id=0&amp;app_id=58479`,
    allow: 'fullscreen',
    frameBorder: '0',
    width: '1280',
    height: '720',
    title,
  }

  // useEffect(() => {
  //   if (!ref) return
  //   const { wiggle } = studio
  //   wiggle({ target: ref.current })
  // }, [ref])

  return (
    <div {...containerProps}>
      <iframe {...iframeProps} />
    </div>
  )
}
