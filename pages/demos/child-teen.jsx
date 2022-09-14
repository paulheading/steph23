import { childTeen as data } from 'data/demos'
import { Title } from 'components'
import { Template } from 'components/templates/demos'
import { demos } from 'data/seo'

export default function ChildTeen() {
  const props = {
    head: demos.childTeen,
    data,
  }
  return (
    <Template {...props}>
      <Title>Teen & Child Voices</Title>
      <p>
        Need an excitable toddler for your animation? A little boy for your new game or a teenager for an e-learning script? I regularly deliver child and teen voices for clients across all industries, including Corporate, Audiobook and Radio Drama. I love connecting with my inner child and will
        bring honesty, humour and a spark of joy to scripts that are for and about young people. Get in touch and let this big kid set your audio alight!
      </p>
    </Template>
  )
}
