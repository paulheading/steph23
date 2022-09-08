import { intro } from 'data/playlist'
import { useState } from 'react'
import { Page, Logos } from 'components'
import { Hero, Intro, Studio, Testimonials } from 'components/pages'
import { Adobe, Pixar, Aljazeera, Disney, Sega, Unity, Microsoft, Sony, Audible, BBC, LucasFilm, TwentyFour, Cambridge, Yoto } from 'logos'
import { home } from 'scripts/head'

export default function Home() {
  const [active, setActive] = useState(intro[0])
  const pageProps = {
    head: home,
    menu: 'green',
    footer: 'cream',
  }
  const audioProps = {
    active,
    setActive,
  }
  return (
    <Page {...pageProps}>
      <Hero />
      <Intro {...audioProps} />
      <Studio {...audioProps} />
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
