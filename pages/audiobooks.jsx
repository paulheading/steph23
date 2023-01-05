import { useState } from 'react'
import { favourites, all as data } from 'data/audiobooks'
import { Harper, AngryRobot, Penguin, ChatterBox, Hodder, Yoto, Audible, Bookotoure, RNIB, Storytel, Hachette, Ladbroke, Orion, Dreamscape, Bloomsbury, Tonies } from 'logos'
import { Page, Logos } from 'components'
import { Favourites, Affiliations, Accents, Purchase, Samples } from 'components/sections'
import { audiobooks as head } from 'data/seo'

export default function Audiobooks() {
  const [active, setActive] = useState(favourites.tracks[0])
  const pageProps = {
    footer: 'cream',
    head,
  }
  const audioProps = {
    setActive,
    active,
  }
  const samplesProps = {
    variant: 'red',
    ...audioProps,
    animate: true,
    dark: true,
    data,
  }

  return (
    <Page {...pageProps}>
      <Favourites {...audioProps} />

      <Samples {...samplesProps} />

      <Purchase />

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
