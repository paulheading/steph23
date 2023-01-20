import styles from 'styles/pages/audiobooks.module.scss'
import { Container, Wrap, Title } from 'components'
import { favourites } from 'data/audiobooks'
import { Samples } from 'components/ui'
import { useMemo } from 'react'

export function Favourites({ active, setActive }) {
  const containerProps = {
    className: styles.favourites_container,
    variant: 'green',
    top: true,
  }

  const props = useMemo(
    () => ({
      data: [favourites],
      animate: false,
      setActive,
      active,
    }),
    [active, setActive]
  )

  return (
    <Container {...containerProps}>
      <Wrap className="margin-bottom-3">
        <Title>Introduction</Title>
        <p>
          My love of storytelling has led me to dedicate a large part of my voice acting career to narrating audiobooks. With over 130 talking books under my belt, producers, publishers and authors know they can expect the highest level of commitment, professionalism and creativity when working with
          me.
        </p>
        <p>
          <strong>Have a listen to some of my favourite books below.</strong>
          <br /> To hear samples from my extensive collection, keep scrolling down.
        </p>
      </Wrap>
      <Samples {...props} />
    </Container>
  )
}
