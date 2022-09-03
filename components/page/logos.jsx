import { Container, Wrap, Title } from 'components'
import styles from 'styles/components/page/logos.module.scss'

export function Logos({ title }) {
  const containerProps = {
    className: styles.container,
    variant: 'cream',
  }
  return (
    <Container {...containerProps}>
      <Wrap>
        <Title>{title}</Title>
      </Wrap>
    </Container>
  )
}
