import { favourites } from 'data/audiobooks'
import { Container, Wrap, Title } from 'components'
import { Samples } from 'components/ui'

export function Favourites({ active, setActive }) {
  const props = {
    data: [favourites],
    setActive,
    active,
  }

  return (
    <Container top className="text-align-center">
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
