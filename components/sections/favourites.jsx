import styles from 'styles/pages/audiobooks.module.scss'
import { Container, Wrap, Title } from 'components'
import { favourites } from 'data/audiobooks'
import { Samples } from 'components/ui'
import { useEffect, useMemo } from 'react'
import { studio } from 'scripts'

export function Favourites({ active, setActive }) {
  const containerProps = {
    className: styles.favourites_container,
    variant: 'green',
    top: true,
  }

  const props = useMemo(
    () => ({
      animate: 'favourites',
      data: [favourites],
      setActive,
      active,
    }),
    [active, setActive]
  )

  // useEffect(() => {
  //   const { wiggle } = studio
  //   const { animate } = props
  //   wiggle({ target: `.${animate}` })
  // }, [props])

  return (
    <Container {...containerProps}>
      <Wrap className="margin-bottom-3">
        <Title>Favourites</Title>
        <p>
          My love of storytelling has led me to dedicate a large part of my voice acting career to narrating audiobooks. With over 130 talking books under my belt, producers, publishers and authors know they can expect the highest level of commitment, professionalism and creativity when working with
          me.
        </p>
        <p>Have a listen to some of my favourite books below. To hear samples from my extensive collection, keep scrolling down.</p>
      </Wrap>
      <Samples {...props} />
    </Container>
  )
}
