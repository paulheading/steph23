import { radioDrama as data } from 'data/demos'
import { Title } from 'components'
import { Template } from 'components/templates/demos'
import { demos } from 'data/seo'

export default function RadioDrama() {
  const props = {
    head: demos.index,
    data,
  }
  return (
    <Template {...props}>
      <Title>Radio Drama</Title>
      <p>Whether you&apos;re casting a drama, children&apos;s series or science fiction podcast, I&apos;d love to go on a collaborative journey with you and your production.</p>
      <p>
        I&apos;ve been an actor and storyteller practically since the day I could talk. I grew up attending stage shows and theatre courses, before collecting a BA (and postgraduate) certificate in Drama from UCSC. I have dazzled in countless theatre and radio drama productions, where I&apos;m
        skilled in breaking down scripts and diving into a character&apos;s emotional journey.
      </p>
      <p>I will bring the perfect balance of improvisational skill and creative versatility to give your production the spark it needs. Get in touch and request an audition now.</p>
    </Template>
  )
}
