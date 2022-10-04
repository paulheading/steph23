import { Container, Title } from 'components'
import { Samples as SamplesUI } from 'components/ui'
import styles from 'styles/components/sections/samples.module.scss'

export function Samples({ data, variant, dark = false, active, setActive }) {
  const contentProps = {
    className: styles.content,
    section: true,
    id: 'samples',
    variant,
    dark,
  }
  const samplesProps = {
    setActive,
    variant,
    active,
    data,
    dark,
  }
  return (
    <Container {...contentProps}>
      <Title>Samples</Title>
      <SamplesUI {...samplesProps} />
    </Container>
  )
}
