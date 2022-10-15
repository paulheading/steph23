import { homepage } from 'data/playlist'
import { useState } from 'react'
import { Page, Logos, Content } from 'components'
import { Hero, Intro, Studio, Testimonials } from 'components/sections'
import { Adobe, Pixar, Aljazeera, Disney, Sega, Unity, Microsoft, Sony, Audible, BBC, LucasFilm, TwentyFour, Cambridge, Yoto } from 'logos'
import { home as head } from 'data/seo'
import Image from 'next/image'

export default function Home() {
  const [active, setActive] = useState(homepage[0])
  const pageProps = {
    menu: 'green',
    footer: 'cream',
    head,
  }
  const audioProps = {
    active,
    setActive,
  }
  const studioProps = {
    variant: 'red',
    ...audioProps,
  }

  const contentProps = {
    variant: 'cream',
    section: false,
  }

  const stephProps = {
    src: '/stephanie-cannon-one-voice-awards-uk-21-nominee-badge.webp',
    height: 138,
    width: 200,
  }

  return (
    <Page {...pageProps}>
      <Hero />
      <Intro {...audioProps} />
      <Studio {...studioProps} />
      <Testimonials />
      <Logos title="Clients">
        <Adobe />
        <Sega />
        <BBC />
        <Unity />
        <Microsoft />
        <LucasFilm />
        <TwentyFour />
        <Cambridge />
        <Yoto />
        <Sony />
        <Pixar />
        <Aljazeera />
        <Audible />
        <Disney />
      </Logos>
      {/* <Content {...contentProps}>
        <Image {...stephProps} alt="steph" />
      </Content> */}
    </Page>
  )
}
