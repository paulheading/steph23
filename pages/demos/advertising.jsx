import { advertising } from 'data/demos'
import { Title } from 'components'
import DemosLayout from 'components/layouts/demos'
import { demos } from 'data/seo'

function Advertising() {
  const { videos, audio } = advertising
  const layoutProps = {
    head: demos.advertising,
    videos,
    audio,
  }

  return (
    <DemosLayout {...layoutProps}>
      <Title>Advertising</Title>
      <p>Whether you need a conversational US/transatlantic voice, impeccable comic timing or skillful character accents, I will make your commercial shine above the rest.</p>
      <p>I am passionate about making brands accessible and exciting, using heaps of creativity to bring life and colour to any script. I combine this with quick turnarounds, excellent communication and a top quality studio sound, to guarantee you will keep coming back for more.</p>
      <p>Get in touch and give your brand that extra spark!</p>
    </DemosLayout>
  )
}

export default Advertising
