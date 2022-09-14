import { accents as data } from 'data/demos'
import { Title } from 'components'
import { Template } from 'components/templates/demos'
import { demos } from 'data/seo'

export default function Accents() {
  const props = {
    head: demos.index,
    data,
  }
  return (
    <Template {...props}>
      <Title>UK & International Accents</Title>
      <p>I&apos;m a real globe trotter and have added many gorgeous dialects (RP, Spanish, Australian) to my collection along the way. I&apos;m originally from Alaska, but have spent half my life living in London, so I can speak with a true transatlantic sound.</p>
      <p>My clients often ask me to perform a variety of characters in a single project, and are always impressed by the range of accents I offer. Get in touch and test out my sparkling array of international voices!</p>
      <p>I pick up accents quickly and love an excuse to immerse myself in a new dialect, so if the voice you need isn&apos;t listed here, just ask!</p>
    </Template>
  )
}
