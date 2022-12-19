import fullbodyImage from 'public/stephanie-cannon-full-body-pic-female-american-actor.webp'
import headshotImage from 'public/stephanie-cannon-headshot-acting-page.webp'
import { Page, Container, Wrap, Split, Title, ImageWrap } from 'components'
import layout from 'styles/components/layouts/demos.module.scss'
import styles from 'styles/pages/acting.module.scss'
import { imageProps, about, studio } from 'scripts'
import { Mocap } from 'components/sections'
import { acting as head } from 'data/seo'
import { useEffect } from 'react'
import Image from 'next/image'

export default function Acting() {
  const variant = 'cream'
  const pageProps = {
    footer: variant,
    menu: variant,
    head,
  }
  const containerProps = {
    top: true,
    variant,
  }
  const headshotProps = {
    ...imageProps,
    src: headshotImage,
  }
  const fullbodyProps = {
    ...imageProps,
    src: fullbodyImage,
  }

  useEffect(() => {
    const { wiggle } = studio

    wiggle({ target: '#headshot' })
    wiggle({ target: '#body' })
  }, [])

  return (
    <Page {...pageProps}>
      <Container {...containerProps}>
        <Wrap>
          <Split className={styles.first_row}>
            <div className={layout.copy}>
              <Title>Acting</Title>
              <p>
                I&apos;ve always had a passion for bringing stories to life, from acting on stage in my youth to later studying Drama at the University of California Santa Cruz. I&apos;m constantly improving my craft and strive to bring authenticity to every character I play; whether that&apos;s
                Shakespeare, Contemporary Drama or Improvisational Comedy.
              </p>
            </div>
            <ImageWrap id="headshot">
              <Image {...headshotProps} alt="Stephanie Cannon headshot, pleasantly smiling in a pink cardigan" />
            </ImageWrap>
          </Split>
          <Split swap className={styles.second_row}>
            <div className={layout.copy}>
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
            <ImageWrap id="body">
              <Image {...fullbodyProps} alt="Stephanie Cannon full body image, taken in a studio" />
            </ImageWrap>
          </Split>
          <Mocap />
        </Wrap>
      </Container>
    </Page>
  )
}
