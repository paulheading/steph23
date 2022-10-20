import { useState } from 'react'
import { advertising as data } from 'data/demos'
import { Split, Title, Video } from 'components'
import Page from 'components/page/demos'
import { Playlist } from 'components/ui'
import { demos } from 'data/seo'

export default function Advertising() {
  const [active, setActive] = useState(data.main)
  const handleSetActive = (track) => setActive(track)
  const videos = [
    {
      title: '24 Hr Fitness Commercial',
      src: '759504478?h=91268d4bde',
      caption: 'Cheerful, Conversational',
    },
    {
      title: 'Artfinder Commercial',
      src: '759489225?h=f4780e652b',
      caption: 'Smooth, Hip, Enticing',
    },
  ]
  const playlistProps = {
    handleSetActive,
    variant: 'red',
    active,
    data,
  }
  return (
    <Page head={demos.advertising}>
      <Split>
        <div>
          <Title>Advertising</Title>
          <p>Whether you need a conversational US/transatlantic voice, impeccable comic timing or skillful character accents, I will make your commercial shine above the rest.</p>
          <p>I am passionate about making brands accessible and exciting, using heaps of creativity to bring life and colour to any script. I combine this with quick turnarounds, excellent communication and a top quality studio sound, to guarantee you will keep coming back for more.</p>
          <p>Get in touch and give your brand that extra spark!</p>
        </div>
        <Playlist {...playlistProps} />
      </Split>
      <Split className="margin-top-4">
        {videos.map((video, index) => {
          return (
            <div key={'video' + index}>
              <Video {...video} />
              <div className="text-align-center margin-top-1">
                <Title small>{video.caption}</Title>
              </div>
            </div>
          )
        })}
      </Split>
    </Page>
  )
}
