import { childTeen } from 'data/demos'
import { Title } from 'components'
import DemosLayout from 'components/layouts/demos'
import { demos } from 'data/seo'

function ChildTeen() {
  const { videos, audio } = childTeen
  const layoutProps = {
    head: demos.childTeen,
    videos,
    audio,
  }

  return (
    <DemosLayout {...layoutProps}>
      <Title>Teen & Child Voices</Title>
      <p>
        Need an excitable toddler for your animation? A little boy for your new game or a teenager for an e-learning script? I regularly deliver child and teen voices for clients across all industries, including Corporate, Audiobook and Radio Drama. I love connecting with my inner child and will
        bring honesty, humour and a spark of joy to scripts that are for and about young people. Get in touch and let this big kid set your audio alight!
      </p>
    </DemosLayout>
  )
}

export default ChildTeen
