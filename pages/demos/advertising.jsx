import { advertising as data } from 'data/demos'
import Layout from 'components/layouts/demos'
import { Title } from 'components'
import { demos } from 'data/seo'

export default function Advertising() {
  const props = {
    head: demos.advertising,
    data,
  }

  return (
    <Layout {...props}>
      <Title>Advertising</Title>
      <p>Whether you need a conversational US/transatlantic voice, impeccable comic timing or skillful character accents, I will make your commercial shine above the rest.</p>
      <p>I am passionate about making brands accessible and exciting, using heaps of creativity to bring life and colour to any script. I combine this with quick turnarounds, excellent communication and a top quality studio sound, to guarantee you will keep coming back for more.</p>
      <p>Get in touch and give your brand that extra spark!</p>
    </Layout>
  )
}
