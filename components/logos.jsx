import { Container, Wrap, Title } from 'components'
import styles from 'styles/components/logos.module.scss'

export function Logos({ title, children }) {
  const containerProps = {
    className: styles.container,
    variant: 'cream',
  }
  return (
    <Container {...containerProps}>
      <Wrap>
        <Title className={styles.title}>{title}</Title>
        <div className={styles.children}>{children}</div>
      </Wrap>
    </Container>
  )
}
