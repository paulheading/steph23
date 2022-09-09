import { advertising } from 'data/playlist'
import { Title } from 'components'
import { Template } from 'components/templates/demos'
import { demos } from 'scripts/head'

export default function Advertising() {
  const props = {
    data: advertising,
    head: demos,
  }
  return (
    <Template {...props}>
      <Title>Advertising</Title>
      <p>I’m an award nominated voice actor with over 20 years experience, working in almost every area of the industry. I have a smooth, engaging voice with a US/transatlantic accent.</p>
      <p>As a trained actor, I’m proficient with crafting characters and accents. I’m also a skilled improviser, but am equally comfortable taking direction.</p>
      <p>I can deliver professional and friendly voices for e-learning or corporate reads, characters for radio drama and games, or child voices for animation and audiobooks.</p>
    </Template>
  )
}
