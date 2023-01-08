import { corporate } from 'data/demos'
import { Title } from 'components'
import DemosLayout from 'components/layouts/demos'
import { demos } from 'data/seo'

function Corporate() {
  const { videos, audio } = corporate
  const layoutProps = {
    head: demos.corporate,
    videos,
    audio,
  }

  return (
    <DemosLayout {...layoutProps}>
      <Title>Corporate Narration</Title>
      <p>I care about successfully delivering your brand message to the world. I compliment my smooth US/transatlantic accent with expert service, and pride myself on clear project communication.</p>
      <p>Whether you need a young and friendly voice to speak to customers, or confident narration for international business, you&apos;ve come to the right place. I will deliver your copy in an authentic manner, keeping audiences engaged and ensuring your project really shines.</p>
      <p>Get in touch and add some spark to your next Explainer, IVR message or Training Video.</p>
    </DemosLayout>
  )
}

export default Corporate
