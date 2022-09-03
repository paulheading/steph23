import { intro } from 'data/playlist'
import { useState } from 'react'
import { Page, Hero, Intro, Studio, Testimonials, Logos } from 'components'
import { home } from 'scripts/head'

export default function Home() {
  const [active, setActive] = useState(intro[0])
  const pageProps = {
    head: home,
    menu: 'green',
    footer: 'cream',
  }
  const introProps = {
    active,
    setActive,
  }
  const studioProps = {
    active,
    setActive,
  }
  return (
    <Page {...pageProps}>
      <Hero />
      <Intro {...introProps} />
      <Studio {...studioProps} />
      <Testimonials />
      <Logos title="Clients"></Logos>
    </Page>
  )
}
