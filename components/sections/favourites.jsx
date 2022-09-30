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
      <Wrap className="margin-bottom-2">
        <Title>Favourites</Title>
        <p>With over 130 audiobooks under my belt, producers, publishers and authors know they can expect the highest level of commitment, professionalism and creativity when working with me.</p>
        <p>
          My love of storytelling has led me to dedicate a large part of my voice acting career to narrating audiobooks. Thanks to my extensive acting training, I am able to pull listeners into the story with a smooth and captivating delivery, providing an authentic connection to the characters and
          their journeys, no matter what the genre.
        </p>
        <p>I typically narrate in my native US voice but am also frequently called upon for my wide range of accents from around the globe, and for my effective delivery of teen and child voices.</p>
        <p>Have a listen to some of my favourite books below. To hear samples from my extensive collection, keep scrolling down.</p>
      </Wrap>
      <Samples {...props} />
    </Container>
  )
}
