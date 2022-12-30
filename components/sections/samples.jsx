import { Container, Wrap, Title, Link } from 'components'
import { Samples as SamplesUI } from 'components/ui'
import styles from 'styles/components/sections/samples.module.scss'
import { useEffect, useMemo } from 'react'
import { studio } from 'scripts'

export function Samples({ data, variant, dark = false, active, setActive }) {
  const contentProps = {
    className: styles.content,
    section: true,
    id: 'samples',
    variant,
    dark,
  }

  const samplesProps = useMemo(
    () => ({
      animate: 'samples',
      setActive,
      variant,
      active,
      data,
      dark,
    }),
    [setActive, active, data, dark, variant]
  )

  // useEffect(() => {
  //   const { wiggle } = studio
  //   const { animate } = samplesProps
  //   wiggle({ target: `.${animate}` })
  // }, [samplesProps])

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
