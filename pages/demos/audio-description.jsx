import { audioDescription } from 'data/demos'
import { Title } from 'components'
import DemosLayout from 'components/layouts/demos'
import { demos } from 'data/seo'

function AudioDescription() {
  const { videos, audio } = audioDescription
  const layoutProps = {
    head: demos.audioDescription,
    videos,
    audio,
  }

  return (
    <DemosLayout {...layoutProps}>
      <Title>Audio Description</Title>
      <p>
        I love making stories accessible to everyone. With audio description I get to combine my expert timing, site reading, and narrating skills with my passion for film and television. My smooth US/transatlantic accent will bring the listener into the heart of the story, while taking nothing away
        from the existing sparkle. Get in touch and add some flare to your next AD project.
      </p>
    </DemosLayout>
  )
}

export default AudioDescription
