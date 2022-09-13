import { eLearning } from 'data/demos'
import { Content, Title } from 'components'
import { Samples } from 'components/ui'

export function Audiobooks({ active, setActive }) {
  const props = {
    data: [eLearning],
    setActive,
    active,
  }
  return (
    <Content top className="text-align-center">
      <Title>Audiobooks</Title>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis optio numquam magnam, ullam dolorem! Quia accusamus, aut iste perspiciatis id illum voluptatibus quasi sed sint optio repellendus explicabo tenetur! Below are some of my favourites:</p>
      <Samples {...props} />
    </Content>
  )
}
