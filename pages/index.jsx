import { homepage } from 'data/playlist'
import { useState } from 'react'
import { Page, Logos } from 'components'
import { Hero, Intro, Studio, Testimonials } from 'components/sections'
import { Adobe, Pixar, Aljazeera, Disney, Sega, Unity, Microsoft, Sony, Audible, BBC, LucasFilm, TwentyFour, Cambridge, Yoto } from 'logos'
import { home as head } from 'data/seo'

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
    </Page>
  )
}
