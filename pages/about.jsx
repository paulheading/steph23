import { Page, Content, Title, Image } from 'components'
import { about as head } from 'data/seo'
import styles from 'styles/pages/about.module.scss'
import { createImageSrc } from 'scripts'

export default function About() {
  const imageProps = {
    ...createImageSrc('stephanie-cannon-american-female-actor-voiceover-cyclist-environmentalist'),
    className: styles.image,
    border: true,
  }
  const contentProps = {
    className: 'display-flow-root',
    top: true,
  }
  return (
    <Page head={head}>
      <Content {...contentProps}>
        <Image {...imageProps} />
        <Title>About</Title>
        <p>A dedicated and professional US voice, you’ll feel a special spark working with me.</p>
        <p>I’ve been in love with storytelling since I was little. I studied acting at University and now work across voiceover, theatre, film and television, which really is a dream come true.</p>
        <p>I bring passion (and decades of experience) to each project I undertake, whether the story is told through voiceover, narration or physical performance.</p>
        <p>My clients receive a positive and professional creative experience, speedily delivered in high quality audio from my home studio. I bring copy to life with clarity and friendliness, but also have the skills to keep listeners engaged in even the most technical of scripts.</p>
        <p>When I’m not chatting with the many voices in my head, you’ll find me swimming, hiking and travelling the world. I also care deeply about the environment, so you’ll usually find me happily cycling from home to your studio.</p>
      </Content>
    </Page>
  )
}
