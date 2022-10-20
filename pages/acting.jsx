import { Page, Content, Split, Title, Image, Video, Link } from 'components'
import { acting as head } from 'data/seo'
import styles from 'styles/pages/acting.module.scss'
import { createImageSrc } from 'scripts'
import { ArtsCouncil, Equity, Spotlight } from 'logos'

export default function Acting() {
  const variant = 'cream'
  const pageProps = {
    footer: variant,
    menu: variant,
    head,
  }
  const contentProps = {
    top: true,
    variant,
  }
  const imageProps = {
    border: true,
    variant,
  }
  const headshotProps = {
    ...createImageSrc('stephanie-cannon-headshot-acting-page'),
    ...imageProps,
  }
  const fullBodyProps = {
    ...createImageSrc('stephanie-cannon-full-body-pic-female-american-actor'),
    ...imageProps,
  }
  const videoProps = {
    title: 'stephanie-cannon-motion-capture-reel-actor-female-performance-capture-artist',
    src: '762181761?h=1a4e59750c',
  }
  const linkProps = {
    href: 'https://www.voicefox.co.uk/artist/mocap-stephanie-cannon',
    bold: true,
  }
  return (
    <Page {...pageProps}>
      <Content {...contentProps}>
        <Split className={styles.first_row}>
          <div>
            <Title>Acting</Title>
            <p>
              I&apos;ve always had a passion for bringing stories to life, from acting on stage in my youth to later studying Drama at the University of California Santa Cruz. I&apos;m constantly improving my craft and strive to bring authenticity to every character I play; whether that&apos;s
              Shakespeare, Contemporary Drama or Improvisational Comedy.
            </p>
          </div>
          <Image {...headshotProps} />
        </Split>
        <Split className={styles.second_row}>
          <Image {...fullBodyProps} />
          <div>
            <Title>Training</Title>
            <ul className={styles.list}>
              <li>BA & Postgraduate certificate from the University of California Santa Cruz</li>
              <li>Stephane Cornicard – Character Development, Voice & Dubbing</li>
              <li>NIDA - Musical Theatre</li>
              <li>VON – Ongoing workshops on voice acting for games & animation</li>
              <li>Gravy for the Brain – Courses for vocal development, script breakdown and more.</li>
              <li>The Actors Centre – classes for accents, scene work, & character creation</li>
            </ul>
          </div>
        </Split>
        <div className="text-align-center margin-top-3">
          <Title>Motion Capture</Title>
          <p>I’m also an experienced motion capture performer. I’ve created characters for films, animation, games and television. I enjoy creating physicality for monsters, animals and aliens, and am often cast in child roles.</p>
          <p>Whether I’m creating full performance capture for a game, or creature mocap for a fantasy film, I always light up when I get to play in the volume. Check out some of the physical acting I could bring to your next project.</p>
          <p>
            To discuss a mo-cap project, contact Emily Dean at <Link {...linkProps}>Voicefox</Link>
          </p>
          <Video {...videoProps} className="margin-top-3" />
          <Title className="margin-top-3">Stilt Walking</Title>
          <p>
            Is there anything this girl can’t do?! I’ve always been drawn to the most unusual day jobs, and stilt walking fits perfectly into my unique universe! I’ve performed in a variety of guises on peg, dura and power riser stilts. Get in touch if your production is looking for a freelance
            stilt walker!
          </p>
          <p>If you need to create a specific theme for an event, I’d be happy to put you in touch with one of the brilliant circus companies I work for.</p>
          <div className={styles.logos}>
            <Link target="_blank" href="https://www.equity.org.uk/">
              <Equity />
            </Link>
            <Link target="_blank" href="https://www.spotlight.com/9493-9081-8617">
              <Spotlight className={styles.spotlight} />
            </Link>
            <Link target="_blank" href="https://www.artscouncil.org.uk/">
              <ArtsCouncil />
            </Link>
          </div>
        </div>
      </Content>
    </Page>
  )
}
