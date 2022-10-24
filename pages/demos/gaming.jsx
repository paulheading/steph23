import { gaming as data } from 'data/demos'
import { Title, Link } from 'components'
import Layout from 'components/layouts/demos'
import { demos } from 'data/seo'

export default function Gaming() {
  const props = {
    head: demos.gaming,
    data,
  }
  return (
    <Layout {...props}>
      <Title>Gaming</Title>
      <p>
        As a trained actor with a BA in Drama, I&apos;ve got the skills needed to bring your characters to life. I am passionate about finding the humanity in each role and letting their authenticity shine through. I regularly voice characters in my native US/transatlantic accents, but also enjoy
        using dialects from around the globe as well as voicing child characters.
      </p>
      <p>
        And it doesn&apos;t end there. I&apos;m also a dedicated physical performer with experience in MoCap and Performance Capture! I&apos;ve worked on advanced character/creature physicality, performed harness and wire work, and am proficient with stilt walking on pegs, duras and power risers.
      </p>
      <p>
        I&apos;m no stranger to lighting things up in a MoCap space! Check out some of what I can do below. Need performance capture for your game? Find out more about my <Link href="/acting#motion-capture">Mocap experience here</Link>.
      </p>
    </Layout>
  )
}
