import styles from 'styles/components/layouts/demos.module.scss'
import { Video, Title } from 'components'

function VideoWrap(props) {
  const titleProps = {
    className: `${styles.caption} ${styles.red}`,
    margin: false,
    small: true,
  }

  return (
    <div className={styles.wrap_video}>
      <Video {...props} />
      <div className={styles.wrap_caption}>
        <Title {...titleProps}>{props.caption}</Title>
      </div>
    </div>
  )
}

export { VideoWrap }
