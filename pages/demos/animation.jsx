import { animation } from 'data/demos'
import { Title } from 'components'
import DemosLayout from 'components/layouts/demos'
import { demos } from 'data/seo'

function Animation() {
  const { videos, audio } = animation
  const layoutProps = {
    head: demos.animation,
    videos,
    audio,
  }

  return (
    <DemosLayout {...layoutProps}>
      <Title>Animation</Title>
      <p>I have the perfect amount of creative spark and energy to bring your animated characters to life. I am passionate about voicing for cartoons, whether we&apos;re blasting life into a new character or syncing English language with an existing one.</p>
      <p>My improvisational skills will also make your story really shine. I am incredibly versatile with accents, personalities, genders and ages, and will dazzle you with an array of hilarious and layered characters.</p>
      <p>Need a bratty toddler, young boy, quirky animal or crazed granny for your series or film? Get in touch and I&apos;d be delighted to send you an audition.</p>
    </DemosLayout>
  )
}

export default Animation
