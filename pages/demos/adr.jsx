import { audioDescription as data } from 'data/demos'
import { Title } from 'components'
import { Template } from 'components/templates/demos'
import { demos } from 'data/seo'

export default function ADR() {
  const props = {
    head: demos.adr,
    data,
  }
  return (
    <Template {...props}>
      <Title>Audio Description</Title>
      <p>
        I love making stories accessible to everyone. With audio description I get to combine my expert timing, site reading, and narrating skills with my passion for film and television. My smooth US/transatlantic accent will bring the listener into the heart of the story, while taking nothing away
        from the existing sparkle. Get in touch and add some flare to your next AD project.
      </p>
    </Template>
  )
}
