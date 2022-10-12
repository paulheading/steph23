import { Container, Wrap, Title } from 'components'
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
      <Wrap className="margin-bottom-3">
        <Title>Samples</Title>
        <p>Thanks to my extensive acting training, I am able to pull listeners into the story with a smooth and captivating delivery, providing an authentic connection to the characters and their journeys, no matter what the genre.</p>
      </Wrap>
      <SamplesUI {...samplesProps} />
    </Container>
  )
}
