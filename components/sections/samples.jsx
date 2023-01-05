import { Container, Wrap, Title, Link } from 'components'
import { Samples as SamplesUI } from 'components/ui'
import styles from 'styles/components/sections/samples.module.scss'
import { useMemo } from 'react'

export function Samples({ data, variant, dark = false, active, setActive, animate }) {
  const contentProps = {
    className: styles.content,
    section: true,
    variant,
    dark,
  }

  const samplesProps = useMemo(
    () => ({
      setActive,
      animate,
      variant,
      active,
      data,
      dark,
    }),
    [setActive, animate, active, data, dark, variant]
  )

  return (
    <Container {...contentProps}>
      <Wrap className="margin-bottom-3">
        <Title>Samples</Title>
        <p>Thanks to my extensive acting training, I am able to pull listeners into the story with a smooth and captivating delivery, providing an authentic connection to the characters and their journeys, no matter what the genre.</p>
      </Wrap>
      <SamplesUI {...samplesProps} />
      <p className="margin-top-3">
        <Link href="/#studio">Click here for home studio info and sample</Link>
      </p>
    </Container>
  )
}
