import { main, extra, mapIndexIDs } from 'data/playlist/setup'
import vimeo from 'data/vimeo'

const id = 8
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (src) => `/demos/audio-description/stephanie-cannon-us-audio-description-ad-${src}.mp3`

let audioDescription = {
  title: 'Audio Description',
  id,
  main,
  tracks: [
    {
      title: `The Imitation Game, Drama`,
      src: path('drama-film-the-imitation-game-audio-clip'),
      ...extras,
    },
    {
      title: `The Little Prince, Kids' Animation`,
      src: path('animation-children-film-the-little-prince-audio-clip'),
      ...extras,
    },
  ],
  videos: [
    {
      title: 'stephanie-cannon-us-audio-description-ad-drama-film-the-imitation-game-video',
      src: vimeo('759506581?h=ab6d58ff2a'),
      caption: 'Drama, Non Fiction',
    },
  ],
}

audioDescription.tracks = mapIndexIDs(audioDescription.tracks)
audioDescription.main = audioDescription.tracks[0]

export default audioDescription
