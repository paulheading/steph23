import { useState } from 'react'
import { eLearning, advertising, gaming, series } from 'data/playlist'
import { Harper, AngryRobot, Penguin, ChatterBox, Hodder, Yoto, Audible, Bookotoure, RNIB, Storytel, Hachette, Ladbroke, Orion, Dreamscape, Bloomsbury, Tonies } from 'logos'
import { Page, Logos } from 'components'
import { Audiobooks as Intro, Affiliations, Accents, Portfolio, Samples } from 'components/sections'
import { audiobooks } from 'data/seo'

export default function Audiobooks() {
  const [active, setActive] = useState(eLearning.main)
  const pageProps = {
    head: audiobooks.index,
    footer: 'cream',
  }
  const audioProps = {
    setActive,
    active,
  }
  const samplesProps = {
    data: [eLearning, advertising, gaming, series],
    variant: 'red',
    ...audioProps,
    dark: true,
  }

  return (
    <Page {...pageProps}>
      <Intro {...audioProps} />

      <Samples {...samplesProps} />

      <Portfolio />

      <Accents />

      <Affiliations />

      <Logos title="Publishers and Producers">
        <Harper />
        <AngryRobot />
        <Penguin />
        <ChatterBox />
        <Hodder />
        <Yoto />
        <Audible />
        <Bookotoure />
        <RNIB />
        <Storytel />
        <Hachette />
        <Ladbroke />
        <Orion />
        <Dreamscape />
        <Bloomsbury />
        <Tonies />
      </Logos>
    </Page>
  )
}
