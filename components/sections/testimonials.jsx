import { Container, Wrap } from 'components'
// import styles from 'styles/components/sections/testimonials.module.scss'

export function Testimonials() {
  const containerProps = {
    variant: 'yellow',
    section: false,
  }
  return (
    <Container {...containerProps}>
      <Wrap></Wrap>
    </Container>
  )
}
