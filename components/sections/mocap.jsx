import { Container, Title, Video, Link } from 'components'
import styles from 'styles/pages/acting.module.scss'
import { ArtsCouncil, Equity, Spotlight } from 'logos'

export function Mocap() {
  const containerProps = {
    className: 'text-align-center padding-top-3',
    id: 'motion-capture',
    padding: false,
  }
  const videoProps = {
    title: 'stephanie-cannon-motion-capture-reel-actor-female-performance-capture-artist',
    src: '762181761?h=1a4e59750c',
  }
  const linkProps = {
    href: 'https://www.voicefox.co.uk/artist/mocap-stephanie-cannon',
    target: '_blank',
    bold: true,
  }
  return (
    <Container {...containerProps}>
      <Title>Motion Capture</Title>
      <p>I’m also an experienced motion capture performer. I’ve created characters for films, animation, games and television. I enjoy creating physicality for monsters, animals and aliens, and am often cast in child roles.</p>
      <p>Whether I’m creating full performance capture for a game, or creature mocap for a fantasy film, I always light up when I get to play in the volume. Check out some of the physical acting I could bring to your next project.</p>
      <p>
        To discuss a mo-cap project, contact Emily Dean at <Link {...linkProps}>Voicefox</Link>
      </p>
      <Video {...videoProps} className="margin-top-3" />
      <Title className="margin-top-3">Stilt Walking</Title>
      <p>
        Is there anything this girl can’t do?! I’ve always been drawn to the most unusual day jobs, and stilt walking fits perfectly into my unique universe! I’ve performed in a variety of guises on peg, dura and power riser stilts. Get in touch if your production is looking for a freelance stilt
        walker!
      </p>
      <p>If you need to create a specific theme for an event, I’d be happy to put you in touch with one of the brilliant circus companies I work for.</p>
      <div className={styles.logos}>
        <Link target="_blank" href="https://www.equity.org.uk/">
          <Equity />
        </Link>
        <Link target="_blank" href="https://www.artscouncil.org.uk/">
          <ArtsCouncil />
        </Link>
        <Link target="_blank" href="https://www.spotlight.com/9493-9081-8617">
          <Spotlight className={styles.spotlight} />
        </Link>
      </div>
    </Container>
  )
}
