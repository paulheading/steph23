import { singing as data } from 'data/demos'
import { Title } from 'components'
import Layout from 'components/layouts/demos'
import { demos } from 'data/seo'

export default function Singing() {
  const props = {
    head: demos.singing,
    data,
  }
  return (
    <Layout {...props}>
      <Title>Singing</Title>
      <p>I started singing very young. As a kid I would belt out Olivia Newton John to anyone who&apos;d listen, before later joining choirs and then ultimately studying musical theatre at NIDA in Sydney. I&apos;ve since performed in a range of shows from musicals to opera.</p>
      <p>Performances include singing for advertising jingles, playing the titular role in the pantomime Aladdin and performing a solo for Some Voices Choir in front of 2000 people!</p>
      <p>I have a wide vocal range from high soprano to low alto and love to sing folk, jazz, country, musical, pop and classical. Get in touch to see if my voice is the sparkle your production needs.</p>
    </Layout>
  )
}
