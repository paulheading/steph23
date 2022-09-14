import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 9
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
}

audioDescription.tracks = mapIndexIDs(audioDescription.tracks)
audioDescription.main = audioDescription.tracks[0]

export default audioDescription
