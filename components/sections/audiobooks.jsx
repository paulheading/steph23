import { intro } from 'data/audiobooks'
import { Container, Wrap, Title } from 'components'
import { Samples } from 'components/ui'

export function Audiobooks({ active, setActive }) {
  const props = {
    data: [intro],
    setActive,
    active,
  }
  return (
    <Container top className="text-align-center">
      <Wrap>
        <Title>Audiobooks</Title>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis optio numquam magnam, ullam dolorem! Quia accusamus, aut iste perspiciatis id illum voluptatibus quasi sed sint optio repellendus explicabo tenetur! Below are some of my favourites:</p>
      </Wrap>
      <Samples {...props} />
    </Container>
  )
}
