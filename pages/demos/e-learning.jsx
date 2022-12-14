import { eLearning as data } from 'data/demos'
import { Title } from 'components'
import Layout from 'components/layouts/demos'
import { demos } from 'data/seo'

export default function ELearning() {
  const props = {
    head: demos.eLearning,
    data,
  }

  return (
    <Layout {...props}>
      <Title>E Learning</Title>
      <p>I&apos;m an award nominated voice actor with over 20 years experience, working in almost every area of the industry. I have a smooth, engaging voice with a US/transatlantic accent.</p>
      <p>As a trained actor, I&apos;m proficient with crafting characters and accents. I&apos;m also a skilled improviser, but am equally comfortable taking direction.</p>
      <p>I can deliver professional and friendly voices for e-learning or corporate reads, characters for radio drama and games, or child voices for animation and audiobooks.</p>
    </Layout>
  )
}
